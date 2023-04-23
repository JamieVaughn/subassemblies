import type { Meta, StoryObj } from '@storybook/svelte';

import bumpSlider from './bumpSlider.svelte';

const meta = {
  title: 'sliders/bumpSlider',
  component: bumpSlider,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<bumpSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};