import { Meta, StoryObj } from '@storybook/react';

import { page } from '../pages/ExamplePage1.json';
import { Checkboxes } from '../components/Checkboxes/Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Checkboxes',
  component: Checkboxes,
  tags: ['components', 'checkboxes']
};

let checkboxes = [{}];

page.elements.forEach(element => {
  if (element.component === "Checkboxes") {
    checkboxes.push(element);
  }
})
console.log(...checkboxes);

export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const Default = {
  args: checkboxes
}

export const Primary: Story = {
  args: {
    label: 'Select all that apply:',
    options: [
      {
        id: 'option1',
        value: 'option1',
        label: 'Option 1',
        selected: false,
        onChange: void(() => {})
      },
      {
        id: 'checkboxes-option2',
        value: 'option1',
        label: 'Option 2',
        selected: false,
        onChange: void(() => {})
      },
      {
        id: 'checkboxes-option3',
        value: 'option1',
        label: 'Option 3',
        selected: false,
        onChange: void(() => {})
      },
      {
        id: 'checkboxes-option4',
        value: 'option4',
        label: 'Option 4',
        selected: false,
        onChange: void(() => {})
      },
    ]
  }
}
