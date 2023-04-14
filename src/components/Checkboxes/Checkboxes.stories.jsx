import React from 'react';

import { Checkboxes } from './Checkboxes';

export default {
  title: 'Example/Checkboxes',
  component: Checkboxes,
};

const label = "Select from the following:";
const options = [
  { id: "checkboxes--1", value: "1", label: "Option 1" },
  { id: "checkboxes--2", value: "2", label: "Option 2" },
  { id: "checkboxes--3", value: "3", label: "Option 3" },
  { id: "checkboxes--4", value: "4", label: "Option 4" },
];

const Template = (args) => <Checkboxes {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: label,
  options: options,
};