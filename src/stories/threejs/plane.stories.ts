import type { Meta, StoryObj } from '@storybook/svelte';

import plane from './plane.svelte';

const meta = {
  title: 'threejs/plane',
  component: plane,
  tags: ['autodocs'],
  argTypes: {

 },
} satisfies Meta<plane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};