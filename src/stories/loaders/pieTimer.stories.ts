import type { Meta, StoryObj } from '@storybook/svelte';

import pieTimer from './pieTimer.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'loaders/pieTimer',
  component: pieTimer,
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type:'color' } },
    debug: { control: { type: 'boolean' } },
  },
} satisfies Meta<pieTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
  },
};