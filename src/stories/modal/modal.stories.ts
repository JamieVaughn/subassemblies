import type { Meta, StoryObj } from '@storybook/svelte';

import modal from './modal.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'modal',
  component: modal,
  tags: ['autodocs'],
  argTypes: {
    title: {control: {type: 'text'}},
    message: {control: {type: 'text'}},
    cta: {control: {type: 'text'}},
  },
} satisfies Meta<modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Join Our Newsletter',
    message: 'Get the latest news and updates from our team.',
    cta: 'Subscribe',
  },
};