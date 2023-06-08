import { Meta, StoryObj } from '@storybook/react';

import { Select } from '../components/Select/Select';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['components', 'Select'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [{
  value: 'orange',
  label: 'Orange'
}, {
  value: 'blue',
  label: 'Blue'
}, {
  value: 'green',
  label: 'Green'
}, {
  value: 'purple',
  label: 'Purple'
}]

export const Default: Story = {
  args: {
    id: 'select-example',
    label: 'Select Input',
    name: 'Select Example',
    disabled: false,
    error: '',
    options: options,
    item: '',
    value: '',
    defaultValue: undefined,
    onChange: undefined,
  }
}
