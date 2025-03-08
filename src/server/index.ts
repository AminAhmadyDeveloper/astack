import { j } from '@/server/jstack';
import { postRouter } from '@/server/routers/post-router';

import { authRouter } from './routers/auth-router';

const api = j
  .router()
  .basePath('/api')
  .use(j.defaults.cors)
  .onError(j.defaults.errorHandler);

const appRouter = j.mergeRouters(api, {
  post: postRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
