import React, { MouseEventHandler } from 'react';
import { classBuilder } from '../../utils/Utils';
import './Link.scss';

export const DEFAULT_CLASS = 'link';

type Props = {
  children?: React.ReactNode;
  href?: string;
  classBlock?: string;
  classModifiers?: string | [];
  className?: string;
  onClick?: () =>  void;
}

export const Link = ({
  children,
  href = undefined,
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  onClick,
  ...attrs
}: Props) => {
  
  const classes = classBuilder(classBlock, classModifiers, className);

  return (
    <a data-module={DEFAULT_CLASS} href={href} onClick={onClick} {...attrs} className={classes()}>
      {children}
    </a>
  );
};

export default Link;
