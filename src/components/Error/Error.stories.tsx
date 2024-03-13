import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Error, { ErrorProps } from './Error';

const meta: Meta<typeof Error> = {
  title: 'Error',
  component: Error,
  tags: ['components', 'error']
};

export default meta;
type Story = StoryObj<typeof Error>

export const Default: Story = (args: ErrorProps) => {
  return (
    <Error {...args}>{args.children}</Error>
  );
};

Default.args = {
  children: 'This is an Error Message.'
};
