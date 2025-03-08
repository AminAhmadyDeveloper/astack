import { betterAuth } from 'better-auth';

import { getBetterAuthConfigs } from '@/configs/better-auth-configs';
import { db } from '@/server/database';

export const auth = betterAuth(getBetterAuthConfigs(db));
