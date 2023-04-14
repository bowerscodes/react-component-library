import React from 'react';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Example/ButtonGroup',
  component: ButtonGroup
};

const buttons = [{
  id: 'button-primary--example',
  type: 'primary',
  label: 'Continue',
},
{
  id: 'button-secondary--example',
  type: 'secondary',
  label: 'Cancel'
},];

const Template = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'button-group-example',
  buttons: buttons,
};