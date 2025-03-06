import { HTTPException } from 'hono/http-exception';
import { jstack } from 'jstack';

import { auth } from '@/lib/auth-api';
import type { ENVSchema } from '@/lib/environment-utils';
import { db } from '@/server/database';

interface Env {
  Bindings: ENVSchema;
}

export const j = jstack.init<Env>();

const databaseMiddleware = j.middleware(async ({ next }) => {
  return await next({ db });
});

const authenticationMiddleware = j.middleware(async ({ next, c }) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.session || !session.user)
    throw new HTTPException(401, {
      message: 'you have to login to access this content',
    });
  return await next({ session });
});

export const publicProcedure = j.procedure.use(databaseMiddleware);

export const protectedProcedure = j.procedure
  .use(databaseMiddleware)
  .use(authenticationMiddleware);
