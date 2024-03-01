import { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  tags: ['components', 'Link'],
};

export default meta;
type Story = StoryObj<typeof Link>;


export const Default: Story = {
  args: {
    children: 'Click me!',
    href: '',
  }
};
