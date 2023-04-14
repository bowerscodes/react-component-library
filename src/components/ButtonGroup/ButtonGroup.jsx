import React from 'react';
import PropTypes from 'prop-types';
import './buttongroup.css';

import { Button } from '../Button/Button'

export const ButtonGroup = ({ id, buttons, ...props }) => {

  return (
    <div className="button-group" {...props}>
      {buttons.map(button => <Button {...button} />)}
    </div>
  )
};

ButtonGroup.propTypes = {
  id: PropTypes.string,
  buttons: PropTypes.shape([{
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
  },])
};

ButtonGroup.defaultProps = {
  id: 'button-group',
  buttons: [],
}