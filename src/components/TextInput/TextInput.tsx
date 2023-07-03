import React from 'react';

import { Label } from '../Label/Label';
import './TextInput.scss';

interface TextInputProps {
  textInputLabel?: string;
  placeholder?: string;
  value?: string;
  width?: 's' | 'm' | 'l' | 'xl' | 'one-half' | 'one-third' | 'two-thirds';

  onSubmit?: () => void;
};

export const TextInput = ({
  textInputLabel,
  placeholder,
  width = 'm',
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
