import type { Meta, StoryObj } from '@storybook/svelte';

import confettiButton from './confettiButton.svelte';

const meta = {
  title: 'buttons/confettiButton',
  component: confettiButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: { type: 'color' } },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<confettiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'confettiButton',
  },
};
