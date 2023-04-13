import type { Meta, StoryObj } from '@storybook/svelte';

import wavebg from './wavebg.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'wavebg',
  component: wavebg,
  tags: ['autodocs'],
  argTypes: {
    height: { control: { type: 'range', min: 0, max: 300, step: 20 } },
    fill: { control: 'color' },
    layers: {control: 'radio', options: [1 ,2 ,3]}
  },
} satisfies Meta<wavebg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
  },
};

export const Secondary: Story = {
  args: {
    fill: 'teal'
  },
};

export const Tertiary: Story = {
  args: {
    fill: 'turquoise'
  },
};