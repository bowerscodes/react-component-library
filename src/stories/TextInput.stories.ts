import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '../components/TextInput/TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
  tags: ['components', 'TextInput']
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    textInputLabel: 'Text Input',
    placeholder: '',
    width: 'medium'
  }
};

export const Small: Story = {
  args: {
    textInputLabel: 'Small Text Input',
    placeholder: '',
    width: 'small'
  }
};

export const Large: Story = {
  args: {
    textInputLabel: 'Large Text Input',
    placeholder: '',
    width: 'large'
  }
};

export const ExtraLarge: Story = {
  args: {
    textInputLabel: 'Extra Large Text Input',
    placeholder: '',
    width: 'extra-large'
  }
};