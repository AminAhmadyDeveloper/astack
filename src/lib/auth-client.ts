import { createAuthClient } from 'better-auth/react';

import { getUrl } from '@/lib/environment-utils';

export const authClient = createAuthClient({
  baseURL: getUrl(),
});
