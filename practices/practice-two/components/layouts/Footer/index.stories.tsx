import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@/components';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'components/Footer',
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const FooterDark: Story = {
  args: {},
  decorators: (Story) => (
    <div className="h-[250px] bg-black py-10">
      <div className="dark">
        <Story />
      </div>
    </div>
  ),
};

export const FooterLight: Story = {
  args: {},
};
