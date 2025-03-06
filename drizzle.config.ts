import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

import { env } from '@/lib/environment-utils';

export default defineConfig({
  out: './src/server/database/drizzle',
  schema: './src/server/database/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL ?? '',
  },
});
