import { useEffect, useRef } from 'react';

import { classBuilder } from '../../utils/Utils';
import './Checkboxes.scss';
import Hint from '../Hint';

export type CheckboxOption = {
  key: string;
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
  checked = false,
  disabled = false,
  onChange = () => {},
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  ...attrs
}: CheckboxProps) => {

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
                  classBlock={classes('hint')}
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
