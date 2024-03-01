import type { Meta, StoryObj } from '@storybook/react';

import Hint from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Hint',
  component: Hint,
  tags: ['components', 'Hint']
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Small: Story = {
  args: {
    children: 'This is a small hint.',
    size: 's'
  },
};

export const Medium: Story = {
  args: {
    children: 'This is a medium hint.',
    size: 'm'
  },
};

export const Large: Story = {
  args: {
    children: 'This is a large hint.',
    size: 'l'
  },
};
