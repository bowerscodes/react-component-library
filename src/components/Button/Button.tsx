import React from 'react';

import './Button.scss';

interface ButtonProps {
  id?: string;
  type: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

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
