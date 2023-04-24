import type { Meta, StoryObj } from '@storybook/svelte';

import holygrail from './holygrail.svelte';

const meta = {
  title: 'layouts/holygrail',
  component: holygrail,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<holygrail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  }
}
