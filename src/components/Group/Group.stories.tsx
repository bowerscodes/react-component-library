import { Meta, StoryObj } from '@storybook/react';
import Group from './Group';
import TextInput from '../TextInput';

const meta: Meta<typeof Group> = {
  title: 'Group',
  component: Group,
  tags: ['components', 'Group'],
};

const group = {
  id: 'group-example',
  label: 'Address Details',
  children: [
    <p>Enter your address:</p>,
    <TextInput id="example" />,
    <TextInput id="example" />,
    <TextInput id="example" />,
    <TextInput id="example" />
  ]
};

const defaultArgs = group;

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: { ...defaultArgs },
};

export const Fieldset: Story = {
  args: {
    ...defaultArgs,
    fieldset: true,
  },
};
