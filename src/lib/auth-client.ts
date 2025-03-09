import { createAuthClient } from 'better-auth/react';

import { getUrl } from '@/lib/server-utils';

export const authClient = createAuthClient({
  baseURL: getUrl(),
});
