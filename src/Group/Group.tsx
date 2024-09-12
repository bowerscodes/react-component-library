import React from 'react';

import Label from '../Label';
import Hint from '../Hint';
import Error from '../ErrorMessage';
import { classBuilder, cleanHtmlAttributes, toArray } from '../utils/Utils';
import './Group.scss';

export const DEFAULT_CLASS = 'group';

export interface GroupProps {
  children: React.ReactNode;
  fieldId: string;
  id?: string;
  label: string;
  labelSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
  hint?: string;
  errors?: string[];
  fieldset?: boolean;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const Group = ({
  children,
  fieldId,
  id = fieldId,
  label,
  labelSize,
  hint,
  errors,
  fieldset = false,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: GroupProps) => {

  const classModifiers = [...toArray(_classModifiers), errors && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className);
  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div {...cleanedAttrs} key={id} className={classes()}>
      {fieldset && 
        <fieldset className={classes('fieldset')}>
          <legend className={classes('legend')}>
            <Label fieldId={id} size={labelSize}>{label}</Label>
          </legend>
          {hint && <Hint size='s' >{hint}</Hint>}
          {errors && <Error id={`${id}-error`}>{errors}</Error>}
          {children}
        </fieldset>}
      {!fieldset && 
        <>
          <Label fieldId={id} size={labelSize}>{label}</Label>
          {hint && <Hint size='s' >{hint}</Hint>}
          {errors && <Error id={`${id}-error`} >{errors}</Error>}
          {children}
        </>
        }
    </div>
  );
};

Group.displayName = 'Group';

export default Group;
