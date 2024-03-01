import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput';
import './TextInput.scss';

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
  tags: ['components', 'TextInput']
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Medium: Story = {
  args: {
    textInputLabel: 'Text Input',
    placeholder: '',
    width: 'm'
  }
};

export const Small: Story = {
  args: {
    textInputLabel: 'Small Text Input',
    placeholder: '',
    width: 's'
  }
};

export const Large: Story = {
  args: {
    textInputLabel: 'Large Text Input',
    placeholder: '',
    width: 'l'
  }
};

export const ExtraLarge: Story = {
  args: {
    id: 'extraLargeTextInput',
    textInputLabel: 'Extra Large Text Input',
    placeholder: '',
    width: 'xl',
  }
};