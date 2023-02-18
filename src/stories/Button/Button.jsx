import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ id, type, backgroundColor, size, label, ...props }) => {
  const mode = `button--${type}`;
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  type: 'secondary',
  size: 'medium',
  onClick: undefined,
};
