import { Meta, StoryObj } from '@storybook/react';
import DateInput from './DateInput';
import Group, { GroupProps } from '../Group/Group';

const meta: Meta<typeof DateInput> = {
  title: 'Date Input',
  component: DateInput,
  tags: ['components', 'DateInput'],
};

const groupProps: GroupProps = {
  id: 'group-example',
  label: 'Date of Birth',
  children: <DateInput id="date-input-example" fieldId="date-input" />,
};

type GroupWithDateInputProps = {
  groupProps: GroupProps,
};

const GroupWithDateInput: React.FC<GroupWithDateInputProps> = (props: GroupWithDateInputProps) => {
  return(
  <Group {...props.groupProps}>
    <DateInput id="date-input-example" fieldId="date-input" />
  </Group>
  );
};



export default meta;
type Story = StoryObj<typeof GroupWithDateInput>;

export const Default: Story = (args:GroupWithDateInputProps) => <GroupWithDateInput {...args} />;
Default.args = {
  groupProps: groupProps,
};

// export const Default: Story = {
//   args: { ...defaultArgs },
// };
