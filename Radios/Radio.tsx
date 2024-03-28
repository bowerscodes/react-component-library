import React, { useEffect, useRef } from 'react';

import Hint, { DEFAULT_CLASS as DEFAULT_HINT_CLASS } from '../Hint/Hint';
import { DEFAULT_CLASS as DEFAULT_LABEL_CLASS } from '../Label/Label';
import { classBuilder } from '../utils/Utils';
import './Radios.scss';

export const DEFAULT_CLASS = 'radios';

export type RadioProps = {
  id: string;
  name: string;
  option: RadioOption;
  hint?: string;
  selected?: any;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export type RadioOption = {
  id?: string;
  value: string;
  label: string;
  hint?: string;
  disabled?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  nested?: any;
};

export const Radio = ({ 
  id,
  name,
  option,
  hint,
  selected,
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  ...attrs
}: RadioProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = selected;
    };
  }, [inputRef, selected]);

  return(
    <>
      <div className={classes('item')} {...attrs}>
        <input
          ref={inputRef}
          id={id}
          type='radio'
          name={name}
          value={option.value}
          className={classes('input')}
          disabled={option.disabled}
        />
        <label htmlFor={id} className={`${DEFAULT_LABEL_CLASS} ${classes('label')}`}>
          {option.label}
        </label>
        {option.hint && <Hint id={`${id}-hint`} classBlock={`${DEFAULT_HINT_CLASS} ${classes('hint')}`}>{option.hint}</Hint>}
      </div>
      {selected && option.children && <div className={classes('conditional')}>{option.children}</div>}
    </>
  )
};

export default Radio;
