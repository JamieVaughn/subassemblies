import type { Meta, StoryObj } from '@storybook/svelte';

import singleInputStars from './singleInputStars.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'singleInputStars',
  component: singleInputStars,
  tags: ['autodocs'],
  argTypes: {
    maxRating: {control: {type: 'number'}},
    icon: {control: 'radio', options: ['star', 'heart']},
    dir: {control: 'radio', options: ['rtl', 'ltr']},
  },
} satisfies Meta<singleInputStars>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    maxRating: 5
  },
};

export const Hearts: Story = {
  args: {
    maxRating: 5,
    icon: 'heart'
  },
};