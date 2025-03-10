import { RecentPost } from '@/app/(main)/_components/post';
import { cn } from '@/lib/tailwind-utils';

const MainPage = () => {
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

        <RecentPost />
      </div>
    </main>
  );
};

export default MainPage;
