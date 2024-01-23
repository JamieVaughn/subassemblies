import type { Meta, StoryObj } from '@storybook/svelte';

import mastermind from './mastermind.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'mastermind',
  component: mastermind,
  tags: ['autodocs'],
  argTypes: {
    title: {control: {type: 'text'}},
    message: {control: {type: 'text'}},
    cta: {control: {type: 'text'}},
  },
} satisfies Meta<mastermind>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    turns: 10
  },
};