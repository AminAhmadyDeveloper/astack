import type { FC, PropsWithChildren } from 'react';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth-api';
import { cn } from '@/lib/tailwind-utils';

const AuthenticationLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.session) redirect('/');

  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-50 mix-blend-soft-light [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16">
        <h1
          className={cn(
            'inline-flex flex-col gap-1 text-center tracking-tight transition',
            'font-display text-4xl leading-none font-semibold sm:text-5xl md:text-6xl lg:text-[4rem]',
            'bg-gradient-to-r from-20% bg-clip-text text-transparent',
            'from-white to-gray-50',
          )}
        >
          <span>AStack</span>
        </h1>

        <p className="mb-8 text-center text-lg/7 text-pretty text-[#ececf399] sm:text-center sm:text-wrap md:text-xl/8">
          The stack for building seriously fast, lightweight with better-auth
          and{' '}
          <span className="inline sm:block">
            end-to-end typesafe Next.js apps.
          </span>
        </p>
        <div className="w-full max-w-sm space-y-2 rounded-md bg-black/15 px-8 py-6 text-zinc-100/75 backdrop-blur-lg">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthenticationLayout;
