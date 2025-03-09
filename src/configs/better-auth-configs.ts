import type { NeonQueryFunction } from '@neondatabase/serverless';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import type { NeonHttpDatabase } from 'drizzle-orm/neon-http';

import { getUrl } from '@/lib/server-utils';
import * as schema from '@/server/database/schema';

export const getBetterAuthConfigs = (
  db: NeonHttpDatabase<typeof schema> & {
    $client: NeonQueryFunction<false, false>;
  },
) => {
  return {
    baseURL: getUrl(),
    database: drizzleAdapter(db, {
      provider: 'pg',
      schema: schema,
    }),
    emailAndPassword: {
      enabled: true,
    },
  };
};
