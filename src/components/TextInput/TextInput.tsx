import React from 'react';

import { Label } from '../Label/Label';
import './TextInput.scss';

interface TextInputProps {
  textInputLabel?: string;
  placeholder?: string;
  value?: string;
  width?: 'small' | 'medium' | 'large' | 'extra-large';

  onSubmit?: () => void;
};

export const TextInput = ({
  textInputLabel,
  placeholder,
  width = 'medium',
  ...props
}: TextInputProps) => {
  
  return (
    <div className='input-container'>
      <Label
        children = {textInputLabel}
        size = 'm'
      />
      <input
        type="text"
        className={['textinput', `textinput--${width}`].join(' ')}
        {...props}
      />
    </div>
  )
};
