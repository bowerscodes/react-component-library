import type { Meta, StoryObj } from '@storybook/react';

import ButtonGroup from './ButtonGroup';


const meta: Meta<typeof ButtonGroup> = {
  title: 'Button Group',
  component: ButtonGroup,
  tags: ['components', 'ButtonGroup'],
};

const buttonGroup = {
  id: "confirmation",
  component: "ButtonGroup",
  props: {
    label: "Confirm",
    buttons: [
      {
        key: "button1",
        id: "submit",
        type: "primary",
        size: "m",
        label: "Submit"
      },
      {
        key: "button2",
        id: "cancel",
        type: "secondary",
        size: "m",
        label: "Cancel"
      }
    ],
    content: {
      text: "Are you happy to submit your preferences?",
      hint: "Your preferences can be updated anytime"
    }
  }
};

const defaultArgs = buttonGroup.props;


export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {...defaultArgs}
};
