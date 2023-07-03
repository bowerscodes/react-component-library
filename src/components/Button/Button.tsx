import React from 'react';

import './Button.scss';

interface ButtonProps {
  id: string;
  type: 'primary' | 'secondary' | 'warning';
  size?: 's' | 'm' | 'l' | 'xl';
  label: string;
  onClick?: () => void;
};

export const Button = ({
  id,
  type = 'primary',
  size = 'm',
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
