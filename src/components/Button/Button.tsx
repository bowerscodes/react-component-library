import React from 'react';
import { classBuilder, toArray } from '../../utils/Utils';
import './Button.scss';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  type: 'primary' | 'secondary' | 'warning';
  size?: 's' | 'm' | 'l' | 'xl';
  onClick?: () => void;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'button';

export const Button = ({
  children,
  disabled = false,
  type = 'primary',
  size = 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size, type],
  className = '',
  ...attrs
}: ButtonProps) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)

  return (
    <button 
      aria-disabled={disabled}
      disabled={disabled}
      {...attrs}
      className={classes()}
    >
      {children}
    </button>
  );
};

export default Button;
