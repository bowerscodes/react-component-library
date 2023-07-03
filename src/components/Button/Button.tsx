import React from 'react';

import './Button.scss';

interface ButtonProps {
  key?: string;
  id: string;
  type: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

export const Button = ({
  id,
  type = 'primary',
  size = 'medium',
  label = '',
  ...attrs
}: ButtonProps) => {
  return (
    <button
      key={id}
      className={['button', `button--${type}`, `button--${size}`].join(' ')}
      {...attrs}
    >
      {label}
    </button>
  )
};
