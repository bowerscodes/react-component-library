import { useEffect, useRef, useState } from 'react';

import { cleanHtmlAttributes } from '../../utils/Utils';
import './Checkboxes.scss';

export type CheckboxOption = {
  key: string;
  id: string;
  value: string;
  label: string;
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
};

export const DEFAULT_CLASS = 'checkbox';

export const Checkbox = ({
  id,
  name = id,
  option,
  checked = false,
  disabled = false,
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);
  },
  classBlock = DEFAULT_CLASS,
  ...attrs
}: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setChecked(checked);
    onChange(event);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = isChecked;
    }
  }, [inputRef, isChecked, checked]);

  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div className={`${DEFAULT_CLASS}-item`}>
      <div className={`${DEFAULT_CLASS}-container`}>
        <label className={`${DEFAULT_CLASS}-label`}>
          <input 
            id={id}
            name={name}
            type="checkbox"
            className={`${DEFAULT_CLASS}-item-input`}
            value={option.value}
            checked={isChecked}
            onChange={onCheck}
            ref={inputRef}
            disabled={disabled || option.disabled}
            {...cleanedAttrs}
          />
          <span className={DEFAULT_CLASS}/>
          <div className={`${DEFAULT_CLASS}-item-label`}>
            {option.label}
          </div>
        </label>
      </div>
    </div>
  )
};

export default Checkbox;
