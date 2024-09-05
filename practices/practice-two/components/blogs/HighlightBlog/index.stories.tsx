import type { Meta, StoryObj } from '@storybook/react';

// Components
import HighlightBlog from '@/components/blogs/HighlightBlog';
// Mocks
import { BLOG } from '@/mocks';

const meta: Meta<typeof HighlightBlog> = {
  component: HighlightBlog,
  title: 'features/blog/components/HighlightBlog',
};

export default meta;
type Story = StoryObj<typeof HighlightBlog>;

export const HighlightBlogDarkMode: Story = {
  args: {
    author: BLOG.author,
    href: '#',
    imageURL: BLOG.imageURL,
    title: BLOG.title,
  },
  decorators: (Story) => (
    <div className="dark bg-black">
      <Story />
    </div>
  ),
};

export const HighlightBlogLightMode: Story = {
  args: {
    author: BLOG.author,
    href: '#',
    imageURL: BLOG.imageURL,
    title: BLOG.title,
  },
};
