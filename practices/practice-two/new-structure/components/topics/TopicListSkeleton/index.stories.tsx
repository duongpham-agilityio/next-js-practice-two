import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TopicListSkeleton } from '@/features/topic/components';
// Mocks
import { TOPICS } from '@/features/topic/mocks';

const meta: Meta<typeof TopicListSkeleton> = {
  component: TopicListSkeleton,
  title: 'features/topic/components/TopicListSkeleton',
};

export default meta;
type Story = StoryObj<typeof TopicListSkeleton>;

export const TopicListSkeletonDarkMode: Story = {
  args: { topics: TOPICS },
  decorators: (Story) => (
    <div className="dark bg-black  py-5">
      <Story />
    </div>
  ),
};

export const TopicListSkeletonLightMode: Story = {
  args: { topics: TOPICS },
};
