import { Meta, StoryObj } from '@storybook/react';

import { Radios } from '../components/Radios/Radios';
import { Label } from '../components/Label/Label';;

const meta: Meta<typeof Radios> = {
  title: 'Radios',
  component: Radios,
  tags: ['components', 'radios']
};

export default meta;
type Story = StoryObj<typeof Radios>;

export const Default: Story = {
  args: {
    label: 
      <Label children='Select from one of the following: 'size="m" />,
    options: [
      {
        value: 'option1',
        label: 'Option 1',
      },
      {
        value: 'option2',
        label: 'Option 2',
      },
      {
        value: 'option3',
        label: 'Option 3',
      },
    ]
  }
}
