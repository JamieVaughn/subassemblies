import type { Meta, StoryObj } from '@storybook/svelte';

import simpleStars from './simpleStars.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'stars/simpleStars',
  component: simpleStars,
  tags: ['autodocs'],
  argTypes: {
    maxStars: {control: {type: 'number'}}
  },
} satisfies Meta<simpleStars>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    maxStars: 5
  },
};
export const Secondary: Story = {
  args: {
    maxStars: 3
  },
};
export const Tertiary: Story = {
  args: {
    maxStars: 7
  },
};
