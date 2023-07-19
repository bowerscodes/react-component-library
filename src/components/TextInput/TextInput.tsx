import { useState } from 'react';
import { Label } from '../Label/Label';
import './TextInput.scss';

interface TextInputProps {
  textInputLabel?: string;
  placeholder?: string;
  value?: string;
  onChange: () => void;
  width?: 's' | 'm' | 'l' | 'xl' | 'one-half' | 'one-third' | 'two-thirds';
  onSubmit?: () => void;
};

export const TextInput = ({
  textInputLabel,
  placeholder,
  value,
  onChange,
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
        value={value}
        onChange={onChange}
        className={['textinput', `textinput--${width}`].join(' ')}
        {...props}
      />
    </div>
  )
};
