import React from 'react';
import { classBuilder } from '../utils/Utils';
import './Link.scss';

export const DEFAULT_CLASS = 'link';
export const DEFAULT_TARGET = '_blank';

type Props = {
  children?: React.ReactNode;
  href?: string;
  target?: string;
  classBlock?: string;
  classModifiers?: string | string[];
  className?: string;
  onClick?: () =>  void;
}

export const Link = ({
  children,
  href = undefined,
  target = DEFAULT_TARGET,
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  onClick,
  ...attrs
}: Props) => {
  
  const classes = classBuilder(classBlock, classModifiers, className);

  return (
    <a data-module={DEFAULT_CLASS} href={href} target={target} onClick={onClick} {...attrs} className={classes()}>
      {children}
    </a>
  );
};

Link.displayName = 'Link';

export default Link;
