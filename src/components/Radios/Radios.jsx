import React from 'react';
import PropTypes from 'prop-types';
import './Radios.css';


export const Radios = ({ id, label, value, options, required, disabled, ...props }) => {
  
  return (
    <div className="radios__container">
      <label for={id} className="radios__label">
        {label}
      </label>
      <fieldset id={id} className="fieldset">
        {options.map(option => 
          <div className="radio__container">
            <label for={option.id} className="radio__label">
            <input 
              className="radio__input"
              type="radio"
              id={option.id}
              value={option.value}
            />
              {option.label}
            </label>
          </div>
        )}
      </fieldset>
    </div>
  )
};

Radios.propTypes = {
  id: PropTypes.string,
  label : PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.shape([
    {
      id: PropTypes.string,
      label: PropTypes.string,
    },
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Radios.defaultProps = {
  required: false,
  disabled: false,
};