import type { Meta, StoryObj } from '@storybook/svelte';

import accessibleStars from './accessibleStars.svelte';

const meta = {
  title: 'stars/accessibleStars',
  component: accessibleStars,
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'number' },
 },
} satisfies Meta<accessibleStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    max: 5
  },
};

export const Secondary: Story = {
  args: {
    max: 3
  },
};