import { createClient } from 'jstack';

import { getWorkerUrl } from '@/lib/server-utils';
import type { AppRouter } from '@/server';

export const client = createClient<AppRouter>({
  baseUrl: getWorkerUrl(),
});
