import { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  tags: ['components', 'heading']
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    id: 'heading-example',
    headingText: 'Example Heading',
  },
};
