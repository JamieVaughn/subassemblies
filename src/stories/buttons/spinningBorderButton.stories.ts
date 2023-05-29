import type { Meta, StoryObj } from '@storybook/svelte';

import spinningBorderButton from './spinningBorderButton.svelte';

const meta = {
  title: 'buttons/spinningBorderButton',
  component: spinningBorderButton,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<spinningBorderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};