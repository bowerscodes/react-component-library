import React from 'react';

import { Checkbox } from './Checkbox';
import './Checkboxes.scss';
import '../../main.scss'

type checkbox = {
  id: string;
  value: string;
  label: string;
  selected: boolean;
  onChange: void;
}

type Props = {
  label?: string;
  options?: Array<checkbox>;
};

export const Checkboxes = ({
  label,
  options,
  ...attrs
}: Props) => {

  // const onChange = ();
  let onChange: () => void;

  return (
    <div className="checkboxes-container" {...attrs}>
      <fieldset>
        <legend className="label label--m">
          {label}
        </legend>
        {options?.map(option => (
          <Checkbox 
            id={option.id}
            value={option.value}
            label={option.label}
            selected={option.selected}
            onChange={onChange}
            {...attrs}
          />
        ))}
      </fieldset>
    </div>
  )
}
