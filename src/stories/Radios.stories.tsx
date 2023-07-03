import { Meta, StoryObj } from '@storybook/react';

import { Radios } from '../components/Radios/Radios';
import { page } from '../pages/ExamplePage1.json';

const meta: Meta<typeof Radios> = {
  title: 'Radios',
  component: Radios,
  tags: ['components', 'radios']
};

let parsedData = JSON.parse(JSON.stringify(page));
let allRadios: Array<typeof Radios> = [];

parsedData.elements.forEach((element: { component: string; props: any; }) => {
  if (element.component === "Radios") {
    allRadios.push(element.props);
  }
});

const radios = allRadios[0];

export default meta;
type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  args: {...radios}
};
