import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TopicList } from '@/features/topic/components';
// Mocks
import { TOPICS } from '@/features/topic/mocks';

const meta: Meta<typeof TopicList> = {
  component: TopicList,
  title: 'features/topic/components/TopicList',
};

export default meta;
type Story = StoryObj<typeof TopicList>;

export const TopicListDarkMode: Story = {
  args: { topics: TOPICS },
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const TopicListLightMode: Story = {
  args: { topics: TOPICS },
};
