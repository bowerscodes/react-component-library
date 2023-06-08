import React from 'react';
import './label.css';

interface LabelProps {
  labelText?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
};


export const Label = ({
  labelText = '',
  size = 'm',
}: LabelProps) => {
  return (
    <div className={['label', `label--${size}`].join(' ')}>
      {labelText}
    </div>
  )
};
