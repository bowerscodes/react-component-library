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
    label: 'Primary Button',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    type: 'warning',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 's',
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

