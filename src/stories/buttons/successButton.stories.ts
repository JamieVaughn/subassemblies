import type { Meta, StoryObj } from '@storybook/svelte';

import successButton from './successButton.svelte';

const meta = {
  title: 'buttons/successButton',
  component: successButton,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<successButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};