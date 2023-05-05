import type { Meta, StoryObj } from '@storybook/svelte';

import globe from './globe.svelte';

const meta = {
  title: 'threejs/globe',
  component: globe,
  tags: ['autodocs'],
  argTypes: {

 },
} satisfies Meta<globe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};