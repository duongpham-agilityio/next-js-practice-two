import { useCallback, useState } from 'react';

// Models
import { Topic, Topics } from '@/models';

export const useTopics = (topics: Topics) => {
  const [topic, setTopic] = useState(topics[0]);

  const handleChangeTopic = useCallback(
    (topicId: Topic['id']) =>
      setTopic((preTopic) => {
        const topic = topics.find(({ id }) => topicId === id);

        return topic ?? preTopic;
      }),
    [],
  );

  return {
    topic,
    handleChangeTopic,
  };
};
