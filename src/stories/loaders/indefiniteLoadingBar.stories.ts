import type { Meta, StoryObj } from '@storybook/svelte';

import indefiniteLoadingBar from './indefiniteLoadingBar.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'loaders/indefiniteLoadingBar',
  component: indefiniteLoadingBar,
  tags: ['autodocs'],
  argTypes: {
    color1: { control: 'color' },
    color2: { control: 'color' },
    width: { control: { type: 'number' } },
  },
} satisfies Meta<indefiniteLoadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
  },
};