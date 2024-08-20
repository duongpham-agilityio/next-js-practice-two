import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogCardSkeleton } from '@/features/blog/components';
// Mocks
import { BLOG } from '@/features/blog/mocks';

const meta: Meta<typeof BlogCardSkeleton> = {
  component: BlogCardSkeleton,
  title: 'features/blog/components/BlogCardSkeleton',
  decorators: (Story) => (
    <div className="w-[500px]">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof BlogCardSkeleton>;

export const BlogCardSkeletonDarkMode: Story = {
  args: {
    author: BLOG.author,
    href: '#',
    imageURL: BLOG.imageURL,
    title: BLOG.title,
    large: true,
  },
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const BlogCardSkeletonLightMode: Story = {
  args: {
    author: BLOG.author,
    href: '#',
    imageURL: BLOG.imageURL,
    title: BLOG.title,
    large: true,
  },
};
