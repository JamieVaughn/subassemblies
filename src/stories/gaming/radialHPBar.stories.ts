import type { Meta, StoryObj } from '@storybook/svelte';

import radialHPBar from './radialHPBar.svelte';

const meta = {
  title: 'gaming/radialHPBar',
  component: radialHPBar,
  tags: ['autodocs'],
  argTypes: {
    hp: { control: 'number' },
 },
} satisfies Meta<radialHPBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hp: 100
  },
};
