import React from 'react';
import PropTypes from'prop-types';
import './FormGroup.scss';

import { ButtonGroup } from '../ButtonGroup/ButtonGroup';


export const FormGroup = ({ id, label, questions, buttons, ...props }) => {

  return (
    <div className="form-group" id={id} >
      {label && (
        <div className="form-group__label">{label}</div>
      )}
      <div className = "form-group__questions">
        {questions.map(question => 
          <div className="form-group__question">{question}</div>)}
      </div>
        <ButtonGroup {...buttons} />
    </div>
  );
};

FormGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};