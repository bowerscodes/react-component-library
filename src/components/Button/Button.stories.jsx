import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: 'button-primary--example',
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'button-secondary--example',
  type: 'secondary',
  label: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  id: 'button-warning--example',
  type: 'warning',
  label: 'Warning',
}

export const Large = Template.bind({});
Large.args = {
  id: 'button-large--example',
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  id: 'button-small--example',
  size: 'small',
  label: 'Button',
};
