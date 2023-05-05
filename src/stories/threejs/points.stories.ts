import type { Meta, StoryObj } from '@storybook/svelte';

import points from './points.svelte';

const meta = {
  title: 'threejs/points',
  component: points,
  tags: ['autodocs'],
  argTypes: {

 },
} satisfies Meta<points>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};