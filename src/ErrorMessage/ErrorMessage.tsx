import React from 'react';

import { classBuilder } from '../utils/Utils';
import Hidden from '../Hidden'
import './ErrorMessage.scss';


export type ErrorMessageProps = {
  children: any;
  id?: string;
  classBlock?: string;
  classModifiers?: string | string[];
  className?: string;
};

export const DEFAULT_CLASS = 'error-message';

export const ErrorMessage = ({
    children,
    id,
    classBlock = DEFAULT_CLASS,
    classModifiers,
    className = '',
    ...attrs
}: ErrorMessageProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);

  return (
    <span {...attrs} className={classes()}>
      {<Hidden>Error: </Hidden>}
      {children}
    </span>
  )
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
