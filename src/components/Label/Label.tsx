import React from 'react';
import './label.scss';

type Props = {
  children?: React.ReactNode;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
};


export const Label = ({
  children,
  size = 'm',
}: Props) => {
  return (
    <label className={['label', `label--${size}`].join(' ')}>
      {children}
    </label>
  )
};
