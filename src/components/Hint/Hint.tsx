import React from 'react';

import './Hint.scss';

interface HintProps {
  hintText?: string;
  size?: 's' | 'm' | 'l';
};

export const Hint = ({
  hintText,
  size = 'm',
  ...props
}: HintProps) => {
  return (
    <div className={['hint', `hint--${size}`].join(' ')}>
      {hintText}
    </div>
  )
}