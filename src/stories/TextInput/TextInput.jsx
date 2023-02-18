import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';


export const TextInput = ({ id, label, size, placeholder, required, ...props }) => {
  return (
    <div className="textInput--container">
      <label 
        for={id}
        className="textInput--label"
        >{label}</label>
      <input
        id={id}
        type="text"  
        className={['textInput', `textInput--${size}`].join(' ')}
        placeholder={placeholder}
        required={required}
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
}

TextInput.defaultProps = {
  size: 'medium',
  required: false,
}
