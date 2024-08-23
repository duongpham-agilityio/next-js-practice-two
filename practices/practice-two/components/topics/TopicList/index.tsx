'use client';

import isEqual from 'react-fast-compare';
import { memo } from 'react';

// Models
import { Topic, Topics } from '@/models';
// Components
import { Button } from '@/components';

export interface TopicListProps {
  topics: Topics;
  selected?: Topic['id'];
  onChangeTopic?: (topicId: Topic['id']) => void;
}

const TopicList = ({
  topics,
  selected = topics[0].id,
  onChangeTopic,
}: TopicListProps) => (
  <section className="flex justify-start xl:justify-center gap-4 flex-nowrap overflow-x-auto 2xl:overflow-x-[unset]">
    {topics.map(({ id, label }) => {
      const handleChangeTopic = () => onChangeTopic && onChangeTopic(id);

      return (
        <Button
          key={id}
          className="px-6 flex-shrink-0"
          variant={selected === id ? 'primary' : 'outline'}
          onClick={handleChangeTopic}
        >
          {label}
        </Button>
      );
    })}
  </section>
);

export default memo(TopicList, isEqual);
