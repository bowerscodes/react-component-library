import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../components/Checkboxes/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['components', 'checkboxes', 'checkbox']
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'checkbox-example',
    name: 'option1',
    option: {
      key: 'option1',
      id: 'option1',
      value: 'value',
      label: 'Option label',
    },
  },
};
