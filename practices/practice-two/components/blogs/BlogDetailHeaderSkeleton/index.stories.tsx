import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogDetailHeaderSkeleton } from '@/components';

const meta: Meta<typeof BlogDetailHeaderSkeleton> = {
  component: BlogDetailHeaderSkeleton,
  title: 'features/blog/components/BlogDetailHeaderSkeleton',
};

export default meta;
type Story = StoryObj<typeof BlogDetailHeaderSkeleton>;

export const BlogDetailHeaderSkeletonDarkMode: Story = {
  args: {},
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const BlogDetailHeaderSkeletonLightMode: Story = {
  args: {},
};
