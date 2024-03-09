import type { Meta, StoryObj } from '@storybook/react';

import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';


const meta: Meta<typeof ButtonGroup> = {
  title: 'Button Group',
  component: ButtonGroup,
  tags: ['components', 'ButtonGroup'],
};

const buttonGroup: ButtonGroupProps = {
  id: 'button-group',
  label: 'Confirm',
  buttons: [
    {
      key: 'button1',
      id: 'submit',
      label: 'Submit',
      type: 'primary',
      size: 'm',
    },
    {
      key: 'button2',
      id: 'cancel',
      label: 'Cancel',
      type: 'secondary',
      size: 'm',
    }
  ],
  content: {
    text: 'Are you happy to submit your preferences?',
    hint: 'Your preferences can be updated anytime'
  }
};

const defaultArgs = buttonGroup;


export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {...defaultArgs}
};
