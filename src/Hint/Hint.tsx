import React from 'react';

import { classBuilder, cleanHtmlAttributes } from '../utils/Utils';
import './Hint.scss';

export type HintProps = {
  id?: string;
  children: string;
  size?: 's' | 'm' | 'l';
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'hint';

export const Hint = ({
  children,
  size = 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size],
  className = '',
  ...attrs
  
}: HintProps) => {

  const classes = classBuilder(classBlock, _classModifiers, className)
  const cleanedAttrs = cleanHtmlAttributes(attrs)

  return (
    <div {...cleanedAttrs} className={classes()}>
      {children}
    </div>
  );
};

Hint.displayName = 'Hint';

export default Hint;
