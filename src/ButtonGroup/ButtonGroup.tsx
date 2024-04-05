import React from 'react';

import Button, { ButtonProps } from '../Button/Button';
import Hint  from '../Hint/Hint';
import Label from '../Label';
import { classBuilder } from '../utils/Utils';
import './ButtonGroup.scss';


export type ContentProps = {
  text?: string;
  hint?: string;
};

export type ButtonGroupProps = {
  id: string;
  label: string;
  buttons: ButtonProps[];
  content?: ContentProps;
  width?: 'one-third' | 'one-half' | 'two-thirds' | 'full';
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

const DEFAULT_CLASS = 'button-group';

export const ButtonGroup = ({
  id,
  label,
  buttons,
  content,
  width = 'full',
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  ...attrs
}: ButtonGroupProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);

  return (
    <div key={label} className={`${classes()} ${DEFAULT_CLASS}--${width}`} {...attrs} >
      {label && <Label fieldId={id} children={label}/>}
      {content?.text && <p className={classes('text')}>{content.text}</p>}
      {content?.hint && <Hint size='s'>{content.hint}</Hint>}
      {buttons.map(button => {
        return <Button key={button.id} {...button} size='m'/>;
      })}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
