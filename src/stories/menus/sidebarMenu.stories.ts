import type { Meta, StoryObj } from '@storybook/svelte';

import sidebarMenu from './sidebarMenu.svelte';

const meta = {
  title: 'menus/sidebarMenu',
  component: sidebarMenu,
  tags: ['autodocs'],
  argTypes: {

 },
} satisfies Meta<sidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};