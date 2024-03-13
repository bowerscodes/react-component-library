import { Meta, StoryObj } from '@storybook/react';
import Group, { GroupProps } from './Group';
import TextInput from '../TextInput';

const meta: Meta<typeof Group> = {
  title: 'Group',
  component: Group,
  tags: ['components', 'Group'],
};

const group: GroupProps = {
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
const errorArgs = { ...group, error: 'Please comlete all fields.' };

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

export const Error: Story = {
  args: { ...errorArgs },
};
