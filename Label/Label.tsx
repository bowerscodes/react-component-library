import React from 'react';

import { classBuilder, toArray } from '../utils/Utils';
import './Label.scss';

type Props = {
  id?: string;
  fieldId: string;
  children: React.ReactNode;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'label';

export const Label = ({
  fieldId,
  id = `${fieldId}--${DEFAULT_CLASS}`,
  children,
  size = 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size],
  className = '',
}: Props) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)

  return (
    <label id={id} htmlFor={fieldId} className={classes()}>
      {children}
    </label>
  )
};

Label.displayName = 'Label';

export default Label;
