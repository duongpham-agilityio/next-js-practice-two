import type { Meta, StoryObj } from '@storybook/react';

// Components
import { BlogListTemplateSkeleton } from '@/components';
// Mocks
import { BLOGS } from '@/mocks';

const meta: Meta<typeof BlogListTemplateSkeleton> = {
  component: BlogListTemplateSkeleton,
  title: 'features/blog/components/BlogListTemplateSkeleton',
};

export default meta;
type Story = StoryObj<typeof BlogListTemplateSkeleton>;

export const BlogListTemplateSkeletonDarkMode: Story = {
  args: {},
  decorators: (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
};

export const BlogListTemplateSkeletonLightMode: Story = {
  args: {},
};
