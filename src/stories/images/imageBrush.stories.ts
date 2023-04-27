import type { Meta, StoryObj } from '@storybook/svelte';

import imageBrush from './imageBrush.svelte';

const meta = {
  title: 'images/imageBrush',
  component: imageBrush,
  tags: ['autodocs'],
  argTypes: {

 },
} satisfies Meta<imageBrush>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    leftImg: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149050/baffinbay_etm_2000247.jpg',
    rightImg: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149050/baffinbay_oli_2021264.jpg',
  },
};