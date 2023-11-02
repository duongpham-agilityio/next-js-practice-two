'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, memo } from 'react';

const query: QueryClient = new QueryClient();

const ReactQuery = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={query}>{children}</QueryClientProvider>
);

export const ReactQueryProvider = memo(ReactQuery);
