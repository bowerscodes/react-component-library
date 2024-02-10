import { Meta, StoryObj } from '@storybook/react';

import BackToTop from '../components/BackToTop/BackToTop';

const meta: Meta<typeof BackToTop> = {
  title: 'Back to top',
  component: BackToTop,
  tags: ['components', 'BackToTop'],
};

export default meta;
type Story = StoryObj<typeof BackToTop>;

export const Default: Story = {
  args: {
    overrideShow: true
  }
};
