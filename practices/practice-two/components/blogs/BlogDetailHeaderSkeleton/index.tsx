'use client';

import { Skeleton } from '@nextui-org/react';

// Components
import { Container } from '@/components';

export const BlogDetailHeaderSkeleton = () => (
  <Container
    as="section"
    className="rounded-xl mt-10 flex flex-col gap-5 md:gap-10 xl:w-[720px]"
  >
    <Skeleton className="rounded-xl w-full h-48 md:h-96 xl:h-[402px]" />
    <Skeleton className="rounded-xl w-[70%] h-3" />
    <div className="rounded-xl flex flex-col gap-2">
      <Skeleton className="w-11 h-3 rounded-xl md:hidden" />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-3 w-16 rounded-xl" />
          <Skeleton className="h-3 w-12 rounded-xl" />
        </div>
        <div className="rounded-xl flex items-center gap-3 h-11">
          <Skeleton className="rounded-xl w-11 h-3 hidden md:block" />
          <Skeleton className="h-3 w-16 rounded-xl" />
        </div>
      </div>
    </div>
  </Container>
);
