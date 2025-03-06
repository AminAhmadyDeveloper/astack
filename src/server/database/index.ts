import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';

import { env } from '@/lib/environment-utils';
import * as schema from '@/server/database/schema';

config({ path: '.env' });

const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql, schema });
