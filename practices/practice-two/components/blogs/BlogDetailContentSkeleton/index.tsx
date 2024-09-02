'use client';

import { Skeleton } from '@nextui-org/react';

// Components
import { Box, Container } from '@/components';
// Mocks
import { BLOG } from '@/mocks';

export const BlogDetailContentSkeleton = () => (
  <Box as="section" className="bg-background-400 py-10">
    <Container className="text-text-primary flex flex-col gap-10 xl:w-[720px]">
      {BLOG.body.map(({ id }) => (
        <Box key={id} className="flex flex-col gap-5">
          <Skeleton
            className="rounded-xl w-[70%] h-4"
            data-testid="skeleton-item"
          />
          <Box className="flex flex-col gap-2">
            <Skeleton
              className="rounded-xl w-full h-3 text-sm xl:text-lg"
              data-testid="skeleton-item"
            />
            <Skeleton
              className="rounded-xl w-full h-3 text-sm xl:text-lg"
              data-testid="skeleton-item"
            />
            <Skeleton
              className="rounded-xl w-full h-3 text-sm xl:text-lg"
              data-testid="skeleton-item"
            />
            <Skeleton
              className="rounded-xl w-full h-3 text-sm xl:text-lg"
              data-testid="skeleton-item"
            />
            <Skeleton
              className="rounded-xl w-full h-3 text-sm xl:text-lg"
              data-testid="skeleton-item"
            />
          </Box>
        </Box>
      ))}
    </Container>
  </Box>
);
