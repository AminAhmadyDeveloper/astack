import { cors } from 'hono/cors';

import { j } from '@/server/jstack';
import { postRouter } from '@/server/routers/post-router';

import { authRouter } from './routers/auth-router';

const appCors = cors({
  allowHeaders: ['x-is-superjson', 'Content-Type'],
  exposeHeaders: ['x-is-superjson'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: 'http://localhost:3000',
  credentials: true,
});

const api = j
  .router()
  .basePath('/api')
  .use(appCors)
  .onError(j.defaults.errorHandler);

const appRouter = j.mergeRouters(api, {
  post: postRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
