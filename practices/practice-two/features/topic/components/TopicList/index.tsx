import { memo } from 'react';

// Models
import { Topics } from '@/features/topic/models';
// Components
import { Button } from '@/components';

export interface TopicListProps {
  topics: Topics;
}

const TopicList = ({ topics }: TopicListProps) => (
  <section className="flex justify-center gap-4 flex-nowrap overflow-x-auto 2xl:overflow-x-[unset]">
    {topics.map(({ id, label }) => (
      <Button key={id} variant="outline" className="px-6 flex-shrink-0">
        {label}
      </Button>
    ))}
  </section>
);

export default memo(TopicList);
