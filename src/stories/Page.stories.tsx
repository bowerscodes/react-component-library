import { Meta, StoryObj } from '@storybook/react';

import { Page } from '../components/Page/Page';
import { Label } from '../components/Label/Label';
import { Hint } from '../components/Hint/Hint';
import { TextInput } from '../components/TextInput/TextInput';
import { Checkboxes } from '../components/Checkboxes/Checkboxes';
import { Radios } from '../components/Radios/Radios';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';


const meta: Meta<typeof Page> = {
  title: 'Page',
  component: Page,
  tags: ['components', 'page']
};

const checkboxesOptions = [
  {
    id: 'designConsultancy',
    value: 'designConsultancy',
    label: 'Design Consultancy',
    selected: false,
    onChange: void(() => {})
  },
  {
    id: 'softwareDevelopment',
    value: 'softwareDevelopment',
    label: 'Software Development',
    selected: false,
    onChange: void(() => {})
  },
  {
    id: 'projectManagement',
    value: 'projectManagement',
    label: 'Project Management',
    selected: false,
    onChange: void(() => {})
  },
  {
    id: 'brandManagement',
    value: 'brandManagement',
    label: 'Brand Management',
    selected: false,
    onChange: void(() => {})
  },
];

const radiosLabel = <Label children="Would you like us to keep you updated via email?" size="m" />

const radiosOptions = [
  {
    value: 'no',
    label: 'No thanks'
  },
  {
    value: "yes",
    label: "Yes please!"
  }
];


const buttonGroupButtons = [
  <Button type="primary" label="Submit"/>,
  <Button type="secondary" label="Cancel"/>
];

const buttonGroupLabel = 
  <Label children="Confirmation"/>;


export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {}
}
