import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

export const Select = ({ id, label, options, defaultValue, required, disabled, ...props }) => {
  
  const [ value, setValue ] = React.useState({ value: "", label: "" });
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="select-container" >
      <label className="select-label">{label}</label>
      <select 
        id={id}
        className="select"
        value={value}
        required={required}
        disabled={disabled}
        onChange={() => {handleChange(e.target.value)}}
        {...props}
      >
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
}

Select.defaultProps = {
  required: false,
  disabled: false,
  defaultValue: undefined,
}