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

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
