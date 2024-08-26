import type { Meta, StoryObj } from '@storybook/react';

// Components
import { RelatedBlogsSkeleton } from '@/components';

const meta: Meta<typeof RelatedBlogsSkeleton> = {
  component: RelatedBlogsSkeleton,
  title: 'features/blog/components/RelatedBlogsSkeleton',
};

export default meta;
type Story = StoryObj<typeof RelatedBlogsSkeleton>;

export const RelatedBlogsSkeletonDarkMode: Story = {
  args: {},
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const RelatedBlogsSkeletonLightMode: Story = {
  args: {},
};
