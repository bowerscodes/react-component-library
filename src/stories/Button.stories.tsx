import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['components', 'button'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary Button',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning Button'
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'Large Button',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    children: 'Large Button',
  },
};

