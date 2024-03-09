import React from 'react';

import { classBuilder, toArray } from '../../utils/Utils';
import './Label.scss';

type Props = {
  id: string;
  children: React.ReactNode;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'label';

export const Label = ({
  id,
  children,
  size = 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size],
  className = '',
}: Props) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)

  return (
    <label id={id} className={classes()}>
      {children}
    </label>
  )
};

export default Label;
