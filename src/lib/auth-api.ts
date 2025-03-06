import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { getUrl } from '@/lib/environment-utils';
import { db } from '@/server/database';
import * as schema from '@/server/database/schema';

export const auth = betterAuth({
  baseURL: getUrl(),
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
