import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogListTemplate } from '@/components';
// Mocks
import { BLOGS } from '@/mocks';

const meta: Meta<typeof BlogListTemplate> = {
  component: BlogListTemplate,
  title: 'features/blog/components/BlogListTemplate',
};

export default meta;
type Story = StoryObj<typeof BlogListTemplate>;

export const BlogListTemplateDarkMode: Story = {
  args: {
    blogs: BLOGS,
  },
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const BlogListTemplateLightMode: Story = {
  args: {
    blogs: BLOGS,
  },
};
