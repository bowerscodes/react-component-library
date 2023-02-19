import React from 'react';

import { Select } from './Select';

export default {
  title: 'Example/Select',
  component: Select,
};

const label = "Select from one of the following"
const options = [
  { value: "orange", label: "Orange" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
]

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: label,
  options: options,
  defaultValue: {value: 'blue', label: 'Blue'}
}

export const Required = Template.bind({});

Required.args = {
  label: label,
  options: options,
  required: true
}

export const Disabled = Template.bind({});

Disabled.args = {
  label: label,
  options: options,
  disabled: true,
}
