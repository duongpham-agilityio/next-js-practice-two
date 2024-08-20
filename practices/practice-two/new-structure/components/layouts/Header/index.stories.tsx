import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '@/layouts/components';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'layouts/components/Header',
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderDark: Story = {
  args: {},
  decorators: (Story) => (
    <div className="dark bg-black">
      <Story />
    </div>
  ),
};

export const HeaderLight: Story = {
  args: {},
};
