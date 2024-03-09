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
    width: 'm'
  }
};

export const Small: Story = {
  args: {
    width: 's'
  }
};

export const Large: Story = {
  args: {
    width: 'l'
  }
};

export const ExtraLarge: Story = {
  args: {
    id: 'extraLargeTextInput',
    width: 'xl',
  }
};