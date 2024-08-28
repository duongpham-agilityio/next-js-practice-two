'use client';

import { Skeleton } from '@nextui-org/react';

// Components
import { Container } from '@/components';

export const HighlightBlogSkeleton = () => (
  <Container
    className="w-full md:w-[720px] min-h-[600px] space-y-5 flex flex-col rounded-none"
    role="presentation"
  >
    <Skeleton className="w-full md:w-[384px] m-auto rounded-lg">
      <div className="h-[330px] md:h-[216px] bg-default-300" />
    </Skeleton>
    <div className="flex-1 flex flex-col justify-between space-y-7 py-8">
      <Skeleton className="h-3 m-auto rounded-lg" />
      <Skeleton className="h-3 m-auto rounded-lg" />
      <div className="flex-1 space-y-3">
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
      </div>
      <Skeleton className="w-20 h-3 m-auto rounded-lg" />
    </div>
  </Container>
);
