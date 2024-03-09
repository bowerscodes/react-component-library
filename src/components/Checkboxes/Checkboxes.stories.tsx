import { Meta, StoryObj } from '@storybook/react';

import Checkboxes, { CheckboxesProps } from './Checkboxes';
import Group, { GroupProps } from '../Group/Group';

const meta: Meta<typeof Checkboxes> = {
  title: 'Checkboxes',
  component: Checkboxes,
  tags: ['components', 'checkboxes']
};

const checkboxesProps: CheckboxesProps = {
  id: 'whichOfOurServicesAreYouInterestedInFindingOutMoreAbout?',
  options: [
    {
      key: "option1",
      id: "designConsultancy",
      value: "designConsultancy",
      label: "Design Consultancy"
    },
    {
      key: "option2",
      id: "softwareDevelopment",
      value: "softwareDevelopment",
      label: "Software Development"
    },
    {
      key: "option3",
      id: "projectManagement",
      value: "projectManagement",
      label: "Project Management"
    },
    {
      key: "option4",
      id: "brandManagement",
      value: "brandManagement",
      label: "Brand Management"
    }
  ]
};

const options = checkboxesProps.options;

const groupProps: GroupProps = {
  id: 'group-example',
  label: "Which of our services are you interested in finding out more about?",
  children: 
    <Checkboxes {...checkboxesProps} />,
};

type GroupWithCheckboxesProps = {
  groupProps: GroupProps,
  checkboxesProps: CheckboxesProps,
};

const GroupWithCheckboxes: React.FC<GroupWithCheckboxesProps> = (props: GroupWithCheckboxesProps) => {
  return(
  <Group {...props.groupProps}>
    <Checkboxes {...props.checkboxesProps} />
  </Group>
  );
};


export default meta;
type Story = StoryObj<typeof GroupWithCheckboxes>;

export const Default: Story = (args: GroupWithCheckboxesProps) => <GroupWithCheckboxes {...args} />;
Default.args = {
  groupProps: groupProps,
  checkboxesProps: checkboxesProps,
};


