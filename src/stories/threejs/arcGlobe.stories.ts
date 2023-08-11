import type { Meta, StoryObj } from '@storybook/svelte';

import arcGlobe from './arcGlobe.svelte';

const meta = {
  title: 'threejs/arcGlobe',
  component: arcGlobe,
  tags: ['autodocs'],
  argTypes: {

 },
} satisfies Meta<arcGlobe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};