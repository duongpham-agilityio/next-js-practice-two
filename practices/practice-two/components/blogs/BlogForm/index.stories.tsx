import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogForm } from '@/components';
import { DEFAULT_VALUE_BLOG_FORM } from '@/constants/data';

const meta: Meta<typeof BlogForm> = {
  component: BlogForm,
  title: 'features/blog/components/BlogForm',
};

export default meta;
type Story = StoryObj<typeof BlogForm>;

export const BlogFormDarkMode: Story = {
  args: {
    defaultValue: DEFAULT_VALUE_BLOG_FORM,
  },
  decorators: (Story) => (
    <div className="dark bg-black">
      <Story />
    </div>
  ),
};

export const BlogFormLightMode: Story = {
  args: {
    defaultValue: DEFAULT_VALUE_BLOG_FORM,
  },
};
