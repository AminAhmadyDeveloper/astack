import { neon } from '@neondatabase/serverless';
import { betterAuth } from 'better-auth';
import { drizzle } from 'drizzle-orm/neon-http';
import { HTTPException } from 'hono/http-exception';
import type { InferMiddlewareOutput } from 'jstack';
import { jstack } from 'jstack';

import { getBetterAuthConfigs } from '@/configs/better-auth-configs';
import type { ENVSchema } from '@/lib/environment-utils';
import * as schema from '@/server/database/schema';

interface Env {
  Bindings: ENVSchema;
}

export const j = jstack.init<Env>();

const databaseMiddleware = j.middleware(async ({ next, c }) => {
  const sql = neon(c.env.DATABASE_URL);
  const db = drizzle({ client: sql, schema });

  return await next({ db });
});

const betterAuthMiddleware = j.middleware(async ({ next, ctx }) => {
  const { db } = ctx as InferMiddlewareOutput<typeof databaseMiddleware>;
  const auth = betterAuth(getBetterAuthConfigs(db));

  return await next({ auth });
});

const authenticationMiddleware = j.middleware(async ({ next, c, ctx }) => {
  const { auth } = ctx as InferMiddlewareOutput<typeof betterAuthMiddleware>;
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.session || !session.user)
    throw new HTTPException(401, {
      message: 'you have to login to access this content',
    });
  return await next({ session });
});

export const publicProcedure = j.procedure
  .use(databaseMiddleware)
  .use(betterAuthMiddleware);

export const protectedProcedure = publicProcedure.use(authenticationMiddleware);
