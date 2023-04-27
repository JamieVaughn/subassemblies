import type { Meta, StoryObj } from '@storybook/svelte';

import oneStar from './oneStar.svelte';

const meta = {
  title: 'stars/oneStar',
  component: oneStar,
  tags: ['autodocs'],
  argTypes: {
 
  },
} satisfies Meta<oneStar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};