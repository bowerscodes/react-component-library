import React from 'react';

import { Radios } from './Radios';

export default {
  title: 'Example/Radios',
  component: Radios,
};

const label = "Select one of the following:";
const options = [
  { id: "radios--1", value: "1", label: "Option 1" },
  { id: "radios--2", value: "2", label: "Option 2" },
  { id: "radios--3", value: "3", label: "Option 3" },
];

const Template = (args) => <Radios {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "radios-example",
  label: label,
  options: options,
};