import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from '@/lib/auth-api';

export const { POST, GET } = toNextJsHandler(auth);
