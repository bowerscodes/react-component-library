import React from 'react';

import { classBuilder, cleanHtmlAttributes, COMPONENT_TYPES, toArray } from '../utils/Utils';
import './TextInput.scss';

type TextInputProps = {
  id?: string;
  fieldId: string;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errors?: string[] | string;
  readonly?: boolean;
  width?: 's' | 'm' | 'l' | 'xl' | 'one-half' | 'one-third' | 'two-thirds';
  classBlock?: string;
  classModifiers?: string[] | string;
  className?: string;
  maxLength?: number;
  attrs?: any;
};

export const DEFAULT_CLASS = 'input'

export const TextInput = ({
  fieldId,
  id = fieldId,
  value,
  onChange,
  disabled = false,
  errors,
  readonly = false,
  width = 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [width],
  className,
  maxLength,
  ...attrs
}: TextInputProps) => {
  
  const classModifiers = [...toArray(_classModifiers), errors && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className)

  const cleanedAttrs = cleanHtmlAttributes(attrs, COMPONENT_TYPES.INPUT)
  
  const input = (
    <input
      {...cleanedAttrs}
      disabled={disabled}
      id={id}
      name={fieldId}
      type='text'
      value={value}
      onChange={onChange}
      className={classes()}
      maxLength={maxLength}
    />
  );

  return input;
};

TextInput.displayName = 'TextInput';

export default TextInput;
