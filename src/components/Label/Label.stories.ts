import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';


const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  tags: ['components', 'label'],
};

export default meta;
type Story = StoryObj<typeof Label>;


export const Default: Story = {
  args: {
    children: 'Default Label',
    size: 'm'
  }
};

export const ExtraSmall: Story = {
  args: {
    children: 'Extra Small Label',
    size: 'xs'
  }
};

export const Small: Story = {
  args: {
    children: 'Small Label',
    size: 's'
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Label',
    size: 'm'
  }
};

export const Large: Story = {
  args: {
    children: 'Large Label',
    size: 'l'
  }
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large Label',
    size: 'xl'
  }
};
