import React, { ChangeEvent, useEffect, useState } from 'react';

import './select.css';
import { Label } from '../Label/Label';

type Option = {
  value: string;
  label: string;
};

type Props = {
  id?: string;
  label?: string;
  name?: string;
  disabled?: boolean;
  error?: string;
  options?: Option[];
  item?: any;
  value?: any;
  defaultValue?: Option;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  target?: any;
};

export const Select = ({
  id,
  label,
  name,
  disabled,
  error,
  options,
  item,
  value,
  defaultValue,
  onChange,
  ...attrs
}: Props) => {
  
  const [selected, setSelected] = useState(value || defaultValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
  };

  const Select = 
    <select
      className={['select', 'select-box'].join(' ')}
      disabled={disabled}
      onChange={handleChange}
      value={value}
      {...attrs}
    >
      {options?.map(({ value, label }) => (
        <option key={value} value={value} className='select-option'>
          {label}
        </option>
      ))}
    </select>

  const selectComponent = label ? (
    <Label >
      <div className='label'>{label}</div>
      {Select}
    </Label>
  ) : Select;


  return selectComponent;
};
