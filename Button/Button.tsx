import React from 'react';

import { classBuilder, toArray } from '../utils/Utils';
import Link from '../Link';
import './Button.scss';

export type ButtonProps = {
  id: string;
  children?: any;
  disabled?: boolean;
  begin?: boolean;
  href?: string;
  type: 'primary' | 'secondary' | 'submit' | 'warning';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '';
  onClick?: () => void;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'button';

const Button = ({
  id,
  children: _children,
  disabled = false,
  begin = false,
  href = '',
  type = 'primary',
  size = '',
  onClick,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [type, size],
  className = '',
  ...attrs
}: ButtonProps) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)

  const isAnchor = (href: string) => !!href;

  const getArrow = (classes: Function) => {
    return (
      <svg 
        className={classes('right-arrow')} 
        xmlns='http://www.w3.org/2000/svg' 
        width='16'
        height='16'
        viewBox='0 0 33 40' 
        aria-hidden='true'
        focusable='false'
      >
        <path fill='white' d='M0 0h13l20 20-20 20H0l20-20z'/>
      </svg>
    );
  };

  const children = (
    <>
      {_children}
      {begin && getArrow(classes)}
    </>
  );

  const getLinkButton = ({ children, ...attrs}: any) => {
    return <Link {...attrs} role='button'>{children}</Link>
  };

  const getButton = ({ children, type, disabled, onClick, className, ...attrs}: any) => {
    return (
      <button 
        data-module={DEFAULT_CLASS}
        aria-disabled={disabled}
        disabled={disabled}
        type={type === 'submit' ? 'submit' : 'button'}
        {...attrs}
        onClick={onClick ? onClick : null}
        className={className}
      >
        {children}
        {type === 'submit' && 
          <span className={classes('submit-icon')}>
            {getArrow(classes)}
          </span>}
      </button>
    );
  };

  if (isAnchor(href)) {
    return getLinkButton({ children, href, ...attrs });
  }
  return getButton({ children, type, disabled, onClick, className: classes(), ...attrs });

};

Button.displayName = 'Button';

export default Button;
