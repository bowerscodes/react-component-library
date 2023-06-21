import React from 'react';

import './Radios.scss';

type Option = {
  value: string;
  label: string;
};

type Props = {
  label?: React.ReactNode;
  options?: Array<Option>
};

export const Radios = ({
  label,
  options
}: Props) => {

  return (
    <fieldset>
      {label}
        {options && options.map(option => {
          return (
            <label className="radios-label">
              <input
                type="radio"
                name="radio"
                className="radios-input"
                value={option.value}
              />
              {option.label}
            </label>
          )
        })}
    </fieldset>
  )
};

