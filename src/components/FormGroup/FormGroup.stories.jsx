import React from 'react';

import { FormGroup } from './FormGroup';
import { TextInput } from '../TextInput/TextInput';
import { Select } from '../Select/Select';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { Radios } from '../Radios/Radios';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
// import { Button } from '../Button/Button';

export default {
  title: 'Example/FormGroup',
  component: FormGroup,
};

const id = "form-group--example";
const label = "Example FormGroup Component";

const textInputArgs = {
  id: 'textInput--medium--example',
  label: 'First Name',
};
const selectArgs = {
  label: "Select from the following:",
  options: [
    { value: "orange", label: "Orange" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
  ]
};
const checkboxesArgs = {
  label: "Tick all that apply:",
  options: [
    { id: "checkboxes--1", value: "1", label: "Option 1" },
    { id: "checkboxes--2", value: "2", label: "Option 2" },
    { id: "checkboxes--3", value: "3", label: "Option 3" },
    { id: "checkboxes--4", value: "4", label: "Option 4" },
  ],
};
const radiosArgs = {
  label: "Select one of the following:",
  options: [
    { id: "radios--1", value: "1", label: "Option 1" },
    { id: "radios--2", value: "2", label: "Option 2" },
    { id: "radios--3", value: "3", label: "Option 3" },
  ],
};
const primaryButton = {
  id: 'button-primary--example',
  type: 'primary',
  label: 'Continue',
};
const secondaryButton = {
  id: 'button-secondary--example',
  type: 'secondary',
  label: 'Cancel'
};
const buttonGroupArgs = {
  id: 'buttonGroup--example',
  buttons: [primaryButton, secondaryButton]
}

const textInputQuestion = <TextInput {...textInputArgs} />;
const selectQuestion = <Select {...selectArgs} />;
const checkboxesQuestion = <Checkboxes {...checkboxesArgs} />;
const radiosQuestion = <Radios {...radiosArgs} />;
const buttons = buttonGroupArgs;
// const primaryButton = <Button {...primaryButtonArgs} />;
// const secondaryButton = <Button {...secondaryButtonArgs} />;
// const buttons = [<Button {...primaryButtonArgs} />, <Button {...secondaryButtonArgs} />]

const questions = [textInputQuestion, selectQuestion, checkboxesQuestion, radiosQuestion];


const Template = (args) => <FormGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "form-group-example",
  label: label,
  questions: questions,
  buttons: buttons,
};
