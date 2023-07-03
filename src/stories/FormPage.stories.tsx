import { Meta, StoryObj } from '@storybook/react';

import { FormPage } from '../components/FormPage/FormPage';
import { page } from '../pages/ExamplePage1.json';
import { page as warningPage } from '../pages/WarningPage.json';

const meta: Meta<typeof FormPage> = {
  title: 'FormPage',
  component: FormPage,
  tags: ['components', 'page']
};

export default meta;
type Story = StoryObj<typeof FormPage>;

export const Default: Story = {
  args: {
    page: page
  }
};

export const Warning: Story = {
  args: {
    page: warningPage
  }
};
