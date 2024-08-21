import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogCard } from '@/components';
// Mocks
import { BLOG } from '@/mocks';

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
  title: 'features/blog/components/BlogCard',
  decorators: (Story) => (
    <div className="w-[500px]">
      <Story />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const BlogCardDarkMode: Story = {
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

export const BlogCardLightMode: Story = {
  args: {
    author: BLOG.author,
    href: '#',
    imageURL: BLOG.imageURL,
    title: BLOG.title,
    large: true,
  },
};
