import { createEnv } from '@t3-oss/env-core';
import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DATABASE_URL_UNPOOLED: z.string().url(),
    BETTER_AUTH_SECRET: z.string(),
  },
  clientPrefix: 'PUBLIC_',
  client: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export type ENVSchema = typeof env;

export const getUrl = (suffix?: string[]) => {
  const base = (() => {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  })();
  return suffix?.length ? `${base}/${suffix.join('/')}` : base;
};
