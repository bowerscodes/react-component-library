import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Button } from '../components/Button/Button';
import { Hint } from '../components/Hint/Hint';
import { Label } from '../components/Label/Label';


const meta: Meta<typeof ButtonGroup> = {
  title: 'Button Group',
  component: ButtonGroup,
  tags: ['components', 'ButtonGroup'],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    buttons: [
      <Button 
        type='primary'
        label='Primary Button'
      />,
      <Button 
        type='secondary'
        label='Secondary Button'
      />
    ],
    label: 
      <Label 
        children='Button Group'
        size='m'
      />,
    content: [
        <p>
          Would you like to save your changes to your profile?
        </p>,
        <Hint 
          hintText='This change can be reverted anytime.'
          size='s'
        />
    ]
  }
};

export const Confirmation: Story = {
  args: {
    buttons: [
      <Button 
        type='warning'
        label='Delete Account'
      />,
      <Button 
        type='secondary'
        label='Cancel'
      />
    ],
    label: 
      <Label 
        children='Button Group'
        size='m'
      />,
    content: [
        <p>
          Would you like to delete your account?
        </p>,
        <Hint 
          hintText='This change cannot be undone.'
          size='s'
        />
    ]
  }
};
