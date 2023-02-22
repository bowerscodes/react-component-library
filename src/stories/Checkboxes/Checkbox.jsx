import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Checkboxes.scss';

export const Checkbox = ({ id, value, checked, onChange, label, ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = checked;
    }
  }, [inputRef, checked]);


  return (
    <div className="checkbox__container" >
      <input 
        className="checkbox__input"
        id={id}
        type="checkbox"
        value={value} 
        onChange={onChange}
      />
      <label className="checkbox__label" for={id}>{label}</label>
    </div>
  )
};

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  onChange: undefined,
};