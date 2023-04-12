import type { Meta, StoryObj } from '@storybook/svelte';

import Svgmap from './Svgmap.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'svgmap',
  component: Svgmap,
  tags: ['autodocs'],
  argTypes: {
 
  },
} satisfies Meta<Svgmap>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
  },
};
