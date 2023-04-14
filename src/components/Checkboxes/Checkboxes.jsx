import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Checkboxes.css';

import { Checkbox } from './Checkbox'

export const Checkboxes = ({ id, label, options, value, onChange, required, disabled, ...props }) => {

  // Selection is an array of the options which have been selected
  const selection = useRef([]);

  const handleOnChange = () => {
    if (typeof onChange === 'function' && selection.current !== value) {
      onChange({ target: { name: id, value: selection.current } });
    }
  };
  
  useEffect(() => {
    selection.current = value || [];
  }, [value]);

  return (
    <div className="checkboxes__container" {...props}>
      <label for={id} className="checkboxes__label" >
        {label}
      </label>
      <fieldset id={id} className="fieldset" >
      {options.map(option => <Checkbox {...option} />)}
      </fieldset>
    </div>
  )
}

Checkboxes.PropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.shape([
    {
      id: PropTypes.string,
      label: PropTypes.string,
    },
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkboxes.defaultProps = {
  required: false,
  disabled: false,
};