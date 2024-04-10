import React from 'react';

import { classBuilder } from '../utils/Utils';
import './Hidden.scss';

const DEFAULT_CLASS = 'hidden';

type HiddenProps = {
  children: React.ReactNode;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

const Hidden = ({
  children,
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  ...attrs
}: HiddenProps ) => {
  
  const classes = classBuilder(classBlock, classModifiers, className);

  return (
    <span {...attrs} className={classes()}>
      {children}
    </span>
  );
};

Hidden.displayName = 'Hidden';

export default Hidden;
