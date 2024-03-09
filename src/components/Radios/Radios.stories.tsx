import { Meta, StoryObj } from '@storybook/react';

import Radios, { RadiosProps } from './Radios';
import Group, { GroupProps } from '../Group/Group';

const meta: Meta<typeof Radios> = {
  title: 'Radios',
  component: Radios,
  tags: ['components', 'radios']
};

const radiosProps: RadiosProps = {
  id: 'radios',
  fieldId: "Would-you-like-us-to-keep-you-updated-via-email?",
  options: [
    {
      value: "no",
      label: "No thanks"
    },
    {
      value: "yes",
      label: "Yes please!"
    }
  ],
};
const groupProps: GroupProps = {
  id: 'group-example',
  label: 'Would you like us to keep you updated via email?',
  children: 
  <Radios {...radiosProps} />,
};

type GroupWithRadiosProps = {
  groupProps: GroupProps,
  radiosProps: RadiosProps,
}

const GroupWithRadios: React.FC<GroupWithRadiosProps> = ({ groupProps, radiosProps }: GroupWithRadiosProps) => {
  return(
  <Group {...groupProps}>
    <Radios {...radiosProps} />
  </Group>
  );
};

export default meta;

type Story = StoryObj<typeof GroupWithRadios>;

export const Default: Story = (args: GroupWithRadiosProps) => <GroupWithRadios {...args} />;

Default.args = {
  groupProps: groupProps,
  radiosProps: radiosProps,
};
