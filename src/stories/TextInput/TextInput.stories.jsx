import React from 'react';
 
import { TextInput } from './TextInput';

export default {
  title: 'Example/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Small = Template.bind({});
  Small.args = {
    id: 'textInput-small--example',
    label: 'Small TextInput',
    size: 'small',
  };

export const Medium = Template.bind({});
  Medium.args = {
    id: 'textInput-medium--example',
    label: 'Medium TextInput',
    size: 'medium',
  };

export const Large = Template.bind({});
  Large.args = {
    id: 'textInput-large--example',
    label: 'Large TextInput',
    size: 'large',
  };
