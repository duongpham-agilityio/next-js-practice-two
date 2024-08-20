import React from 'react';
import { Card, Skeleton } from '@nextui-org/react';

export const BlogCardSkeleton = () => (
  <Card className="w-full min-h-[600px] space-y-5 p-4 flex flex-col">
    <Skeleton className="rounded-lg">
      <div className="h-80 rounded-lg bg-default-300" />
    </Skeleton>
    <div className="flex-1 flex flex-col justify-between space-y-3 pb-10">
      <Skeleton className="w-3/12 h-3 rounded-lg" />
      <div className="flex-1 space-y-3">
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
      </div>
      <Skeleton className="w-2/5 h-3 rounded-lg" />
    </div>
  </Card>
);
