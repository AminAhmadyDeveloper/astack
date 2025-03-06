import { j } from '@/server/jstack';
import { postRouter } from '@/server/routers/post-router';

const api = j
  .router()
  .basePath('/api')
  .use(j.defaults.cors)
  .onError(j.defaults.errorHandler);

const appRouter = j.mergeRouters(api, {
  post: postRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
