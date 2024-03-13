import { Meta, StoryObj } from '@storybook/react';

import Hidden from './Hidden';

const meta: Meta<typeof Hidden> = {
  title: 'Hidden',
  component: Hidden,
  tags: ['components', 'hidden']
};

export default meta;
type Story = StoryObj<typeof Hidden>

export const Default: Story = (args: any) => {
  return (
    <Hidden {...args} />
  );
};

Default.args = {
  children: 'This is a hidden message.'
};
