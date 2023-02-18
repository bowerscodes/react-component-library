import React from 'react';
import PropTypes from 'prop-types';
import './InsetText.scss';

export const InsetText = ({ text, ...props }) => {
  return (
    <div className="insetText-container">
      <div className={'insetText-content'}>
        {text}
      </div>
    </div>
  );
}

InsetText.propTypes = {
  text: PropTypes.string,
}

InsetText.propTypes = {
}