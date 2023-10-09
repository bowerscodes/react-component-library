import { Meta, StoryObj } from '@storybook/react';

import { Checkboxes } from '../components/Checkboxes/Checkboxes';
import { page } from '../pages/ExamplePage1.json';

const meta: Meta<typeof Checkboxes> = {
  title: 'Checkboxes',
  component: Checkboxes,
  tags: ['components', 'checkboxes']
};

// Import checkboxes from page data
let parsedData = JSON.parse(JSON.stringify(page));
let allCheckboxes: Array<typeof Checkboxes> = [];
parsedData.elements.forEach((element: { component: string; props: any; }) => {
  if (element.component === "Checkboxes") {
    allCheckboxes.push(element.props);
  }
});


export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {
  args: {
    ...allCheckboxes[0], 
    onChange: (selection: string[]) => {
      console.log(selection);
      return{}
    }
  }
};
