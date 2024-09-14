import React, { useEffect, useRef } from 'react';

import { classBuilder, toArray } from '../utils/Utils';
import './Checkboxes.scss';
import Hint from '../Hint';

export type CheckboxOption = {
  id: string;
  value: string;
  label: string;
  children?: React.ReactNode;
  hint?: string;
  disabled?: boolean;
};

export type CheckboxProps = {
  id: string;
  name?: string;
  option: CheckboxOption;
  error?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classBlock?: string;
  classModifiers?: [];
  className?: string;
};

export const DEFAULT_CLASS = 'checkbox';

export const Checkbox = ({
  id,
  name = id,
  option,
  error,
  checked = false,
  disabled = false,
  onChange = () => {},
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: CheckboxProps) => {

  const classModifiers = [...toArray(_classModifiers), error && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = checked;
    }
  }, [inputRef, checked]);


  return (
    <div className={classes('item')}>
      <div className={classes('container')} {...attrs}>
        <label
          className={classes('label')}
          htmlFor={id}
        >
          <input
            className={classes('input')}
            id={id}
            data-testid={name}
            name={name}
            type='checkbox'
            value={option.value}
            onChange={onChange}
            ref={inputRef}
          />
          <span className={classes()} />
            <div className={classes('item--label')}>
              {option.label}
              {option.hint && (
                <Hint
                  id={`${id}-hint`}
                  size='s'
                >
                  {option.hint}
                </Hint>
              )}
              {checked && 
                option.children && 
                  <div className={classes('conditional')}>{option.children}</div>
              }
            </div>
        </label>
      </div>
    </div>
    );
};

export default Checkbox;
