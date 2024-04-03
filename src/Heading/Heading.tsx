import React from 'react';

import { classBuilder, toArray } from '../utils/Utils';
import './Heading.scss';

type Props = {
  id?: string;
  children?: React.ReactNode;
  headingText?: string;
  hNumber?: number | string;
  size?: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'heading';

const hNumSizes = [ 'xl', 'l', 'm', 's', 'xs', 'xxs' ]

export const Heading = ({
  id,
  children,
  headingText,
  hNumber = 2,
  size = hNumber ? hNumSizes[Number(hNumber) - 1] as 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' : 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size],
  className = '',
}: Props) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)

  let HeadingTag = `h${hNumber}` as keyof JSX.IntrinsicElements;

  return (
    <div className={classes('container')}>
      <HeadingTag className={classes()} id={id}>
        {headingText ? headingText : children || null}
      </HeadingTag>
    </div>
  )
};

Heading.displayName = 'Heading';

export default Heading;
