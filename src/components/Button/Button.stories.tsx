import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['components', 'button'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Secondary Button',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    label: 'Warning Button'
  },
};

export const Small: Story = {
  args: {
    size: 's',
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    label: 'Large Button',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    label: 'Extra Large Button',
  },
};

