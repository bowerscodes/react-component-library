import React from 'react';
import PropTypes from'prop-types';
import './formgroup.css';

import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Heading } from '../Heading/Heading';


export const FormGroup = ({ id, label, questions, buttons, ...props }) => {

  return (
    <div className="form-group" id={id} >
      {label && (
        <div className="form-group__label">
          <Heading 
            id={`${id}--heading`}
            headingText={label}
            size='l'
          />
        </div>
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