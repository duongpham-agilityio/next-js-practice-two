'use client';

import React from 'react';
import { Card, Skeleton } from '@nextui-org/react';

// Components
import { Box } from '@/components/common';

export const BlogCardSkeleton = () => (
  <Card
    className="w-full min-h-[600px] space-y-5 flex flex-col rounded-none"
    role="presentation"
  >
    <Skeleton>
      <Box className="h-80 bg-default-300" />
    </Skeleton>
    <Box className="flex-1 flex flex-col justify-between space-y-3 px-5 pb-10">
      <Skeleton className="w-3/12 h-3 rounded-lg" />
      <Box className="flex-1 space-y-3">
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
        <Skeleton className="w-full h-3 rounded-lg" />
      </Box>
      <Skeleton className="w-2/5 h-3 rounded-lg" />
    </Box>
  </Card>
);
