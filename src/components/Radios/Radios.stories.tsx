import { Meta, StoryObj } from '@storybook/react';

import Radios from './Radios';

const meta: Meta<typeof Radios> = {
  title: 'Radios',
  component: Radios,
  tags: ['components', 'radios']
};

// let parsedData = JSON.parse(JSON.stringify(page));
// let allRadios: Array<typeof Radios> = [];

const radios = {

  label: "Would you like us to keep you updated via email?",
  options: [
    {
      key: "radio1",
      id: "no",
      value: "no",
      label: "No thanks"
    },
    {
      key: "radio2",
      id: "yes",
      value: "yes",
      label: "Yes please!"
    }
  ],
  onChange: (selection: string) => {
    console.log(selection);
    return {}
  }
};

export default meta;
type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  args: {...radios}
};
