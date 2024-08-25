import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogDetailContentSkeleton } from '@/components';

const meta: Meta<typeof BlogDetailContentSkeleton> = {
  component: BlogDetailContentSkeleton,
  title: 'features/blog/components/BlogDetailContentSkeleton',
};

export default meta;
type Story = StoryObj<typeof BlogDetailContentSkeleton>;

export const BlogDetailContentSkeletonDarkMode: Story = {
  args: {},
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const BlogDetailContentSkeletonLightMode: Story = {
  args: {},
};
