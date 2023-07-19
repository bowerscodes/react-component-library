import { Meta, StoryObj } from '@storybook/react';

import { FormBuilder } from '../components/FormBuilder/FormBuilder';
import { form } from '../pages/ExampleMulti-Page1.json';

const meta: Meta<typeof FormBuilder> = {
  title: 'FormBuilder',
  component: FormBuilder,
  tags: ['components', 'form-builder']
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Default: Story = {
  args: {
    title: form.title,
    pages: form.pages
  }
};