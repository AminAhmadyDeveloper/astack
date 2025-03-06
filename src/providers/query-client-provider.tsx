'use client';

import {
  QueryClient as QueryClientPrimitive,
  QueryClientProvider as QueryClientProviderPrimitive,
} from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClientPrimitive());

  return (
    <QueryClientProviderPrimitive client={queryClient}>
      {children}
    </QueryClientProviderPrimitive>
  );
};
