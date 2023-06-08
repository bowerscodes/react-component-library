import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components/Label/Label';


const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  tags: ['components', 'label'],
};

export default meta;
type Story = StoryObj<typeof Label>;


export const Default: Story = {
  args: {
    labelText: 'Default Label',
    size: 'm'
  }
};

export const ExtraSmall: Story = {
  args: {
    labelText: 'Extra Small Label',
    size: 'xs'
  }
};

export const Small: Story = {
  args: {
    labelText: 'Small Label',
    size: 's'
  },
};

export const Medium: Story = {
  args: {
    labelText: 'Medium Label',
    size: 'm'
  }
};

export const Large: Story = {
  args: {
    labelText: 'Large Label',
    size: 'l'
  }
};

export const ExtraLarge: Story = {
  args: {
    labelText: 'Extra Large Label',
    size: 'xl'
  }
};
