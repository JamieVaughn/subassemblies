import type { Meta, StoryObj } from '@storybook/svelte';

import Gantt from './gantt.svelte';

const meta = {
  title: 'charts/gantt',
  component: Gantt,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<Gantt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};