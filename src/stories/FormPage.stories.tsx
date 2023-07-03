import { Meta, StoryObj } from '@storybook/react';

import { FormPage } from '../components/JSONPage/FormPage';
import { page } from '../pages/ExamplePage1.json';

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
