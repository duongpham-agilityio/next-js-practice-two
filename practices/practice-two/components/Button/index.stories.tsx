import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryDark: Story = {
  args: {
    children: 'Hello',
    className: 'dark',
  },
};

export const PrimaryLight: Story = {
  args: {
    children: 'Hello',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Hello',
    className: 'dark',
    variant: 'outline',
  },
};

export const OutlineLine: Story = {
  args: {
    children: 'Hello',
    variant: 'outline',
  },
};
