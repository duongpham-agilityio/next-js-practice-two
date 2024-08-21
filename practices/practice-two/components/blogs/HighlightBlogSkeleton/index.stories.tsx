import type { Meta, StoryObj } from '@storybook/react';

// Components
import { HighlightBlogSkeleton } from '@/components';

const meta: Meta<typeof HighlightBlogSkeleton> = {
  component: HighlightBlogSkeleton,
  title: 'features/blog/components/HighlightBlogSkeleton',
  decorators: (Story) => (
    <div className="w-[500px]">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof HighlightBlogSkeleton>;

export const HighlightBlogSkeletonDarkMode: Story = {
  args: {},
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const HighlightBlogSkeletonLightMode: Story = {
  args: {},
};
