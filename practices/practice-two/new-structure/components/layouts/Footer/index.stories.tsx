import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@/layouts/components';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'layouts/components/Footer',
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
