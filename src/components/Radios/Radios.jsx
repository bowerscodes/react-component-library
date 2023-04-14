import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './radios.css';


export const Radios = ({ id, label, value, options, required, disabled, ...props }) => {
  
  const [ selectedOption, setSelectedOption ] = useState(id);

  const handleOnChange = (event) => {
    setSelectedOption(event.target.id)
  };

  return (
    <div className="radios__container">
      <label htmlFor={id} className="radios__label">
        {label}
      </label>
      <fieldset id={id} className="fieldset">
        {options.map(option => 
          <div className="radio__container" key={option.id}>
            <label htmlFor={option.id} className="radio__label">
              <input 
                className="radio__input"
                type="radio"
                id={option.id}
                key={option.id}
                value={option.value}
                checked={selectedOption === option.id}
                onChange={handleOnChange}
              />
              {option.label}
            </label>
          </div>
        )}
      </fieldset>
    </div>
  );
};

Radios.propTypes = {
  id: PropTypes.string,
  label : PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.shape([
    {
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string
    },
  ]).isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Radios.defaultProps = {
  required: false,
  disabled: false,
};