'use client';

import { memo } from 'react';
import { Skeleton } from '@nextui-org/react';

// Mocks
import { TOPICS } from '@/mocks';
// Components
import { Box, Button } from '@/components';

const TopicListSkelton = () => (
  <Box
    as="sections"
    className="flex px-5 gap-4 justify-start overflow-x-scroll lg:justify-center lg:overflow-x-visible pb-1"
  >
    {TOPICS.map(({ id, label }) => (
      <Skeleton key={id} className="rounded-md flex-shrink-0">
        <Button className="px-6 flex-shrink-0" variant="outline">
          {label}
        </Button>
      </Skeleton>
    ))}
  </Box>
);

export default memo(TopicListSkelton);
