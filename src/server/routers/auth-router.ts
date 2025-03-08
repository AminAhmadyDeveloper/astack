import { j, publicProcedure } from '@/server/jstack';

const createAuthHandler = (method: 'query' | 'mutation') =>
  publicProcedure[method](async ({ c, ctx }) => ctx.auth.handler(c.req.raw));

export const authRouter = j.router({
  // Session related
  'get-session': createAuthHandler('query'),
  'list-sessions': createAuthHandler('query'),

  // Authentication
  'sign-in/email': publicProcedure.mutation(async ({ c, ctx }) => {
    const body = await c.req.json();
    console.log(body);

    const response = await ctx.auth.api.signInEmail(body);
    return c.superjson(await response.json());
  }),
  'sign-in/social': createAuthHandler('mutation'),
  'sign-up/email': createAuthHandler('mutation'),
  'sign-out': createAuthHandler('mutation'),

  // Password management
  'forget-password': createAuthHandler('mutation'),
  'reset-password': createAuthHandler('mutation'),
  'reset-password/:token': createAuthHandler('query'),
  'change-password': createAuthHandler('mutation'),

  // Email verification
  'verify-email': createAuthHandler('query'),
  'send-verification-email': createAuthHandler('mutation'),
  'change-email': createAuthHandler('mutation'),

  // Sessions management
  'revoke-session': createAuthHandler('mutation'),
  'revoke-sessions': createAuthHandler('mutation'),
  'revoke-other-sessions': createAuthHandler('mutation'),

  // Social accounts
  'list-accounts': createAuthHandler('query'),
  'link-social': createAuthHandler('mutation'),
  'unlink-account': createAuthHandler('mutation'),

  // User management
  'update-user': createAuthHandler('mutation'),
  'delete-user': createAuthHandler('mutation'),
  'delete-user/callback': createAuthHandler('query'),

  // Utility
  ok: createAuthHandler('query'),
  error: createAuthHandler('query'),
});
