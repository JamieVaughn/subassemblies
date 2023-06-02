import type { Meta, StoryObj } from '@storybook/svelte';

import neumorphic from './neumorphic.svelte';

const meta = {
  title: 'buttons/neumorphic',
  component: neumorphic,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<neumorphic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Submit'
  },
};