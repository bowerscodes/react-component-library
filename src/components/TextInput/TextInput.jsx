import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';


export const TextInput = ({ id, label, size, placeholder, required, disabled, ...props }) => {
  
  const className = "textInput"
  const cssClasses = [className,]
  size && cssClasses.push(`${className}--${size}`);
  required && cssClasses.push(`${className}--required`);
  disabled && cssClasses.push(`${className}--disabled`);

  return (
    <div className="textInput__container">
      <label 
        for={id}
        className="textInput__label"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"  
        className={(cssClasses).join(' ')}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...props}
      ></input>
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
}

TextInput.defaultProps = {
  size: 'medium',
  required: false,
  disabled: false,
}
