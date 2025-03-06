import type { FC, PropsWithChildren } from 'react';

import { Toaster } from '@/components/ui/sonner';
import { mono, sans } from '@/lib/font-utils';
import { cn } from '@/lib/tailwind-utils';
import { QueryClientProvider } from '@/providers/query-client-provider';
import { StylesProvider } from '@/providers/styles-provider';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(sans.variable, mono.variable, 'antialiased')}>
        <StylesProvider />
        <QueryClientProvider>{children}</QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
};

export * from '@/lib/seo-utils';

export default RootLayout;
