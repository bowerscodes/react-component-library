import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Button } from '../components/Button/Button';
import { page } from '../pages/ExamplePage1.json';


const meta: Meta<typeof ButtonGroup> = {
  title: 'Button Group',
  component: ButtonGroup,
  tags: ['components', 'ButtonGroup'],
};

let parsedData = JSON.parse(JSON.stringify(page));
let buttonGroupArray: Array<typeof Button> = [];

parsedData.elements.forEach((element: { component: string; props: any; }) => {
  if (element.component === "ButtonGroup") {
    buttonGroupArray.push(element.props);
  }
});

const defaultArgs = buttonGroupArray[0];

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {...defaultArgs}
};

