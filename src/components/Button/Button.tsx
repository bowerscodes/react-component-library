import React from 'react';

import './button.css';

interface ButtonProps {
  /**
   * Is this the primary call to action?
   */
  type?: 'primary' | 'secondary' | 'warning';
  /**
   * What size input?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Buton text
   */
  label?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
};

/**
 * Primary Button component
 */

export const Button = ({
  type = 'primary',
  size = 'medium',
  label = '',
  ...attrs
}: ButtonProps) => {
  return (
    <button
      className={['button', `button--${type}`, `button--${size}`].join(' ')}
      {...attrs}
    >
      {label}
    </button>
  )
};
