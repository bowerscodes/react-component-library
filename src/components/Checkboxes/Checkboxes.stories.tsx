import { Meta, StoryObj } from '@storybook/react';

import Checkboxes from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Checkboxes',
  component: Checkboxes,
  tags: ['components', 'checkboxes']
};

const checkboxes = {
  label: "Which of our services are you interested in finding out more about?",
  options: [
    {
      "key": "option1",
      "id": "designConsultancy",
      "value": "designConsultancy",
      "label": "Design Consultancy"
    },
    {
      "key": "option2",
      "id": "softwareDevelopment",
      "value": "softwareDevelopment",
      "label": "Software Development"
    },
    {
      "key": "option3",
      "id": "projectManagement",
      "value": "projectManagement",
      "label": "Project Management"
    },
    {
      "key": "option4",
      "id": "brandManagement",
      "value": "brandManagement",
      "label": "Brand Management"
    }
  ]
};


export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const Default: Story = {
  args: {
    ...checkboxes, 
    onChange: (selection: string[]) => {
      console.log(selection);
      return {}
    }
  }
};
