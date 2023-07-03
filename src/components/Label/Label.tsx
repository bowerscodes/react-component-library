import React from 'react';
import './Label.scss';

type Props = {
  key?: string;
  children: React.ReactNode;
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
