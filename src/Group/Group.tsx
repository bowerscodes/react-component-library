import React from 'react';

import Label from '../Label';
import Hint from '../Hint';
import Error from '../Error';
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
  error?: React.ReactNode;
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
  error,
  fieldset = false,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: GroupProps) => {

  const classModifiers = [...toArray(_classModifiers), error && 'error'];
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
          {error && <Error id={`${id}-error`}>{error}</Error>}
          {children}
        </fieldset>}
      {!fieldset && 
        <>
          <Label fieldId={id} size={labelSize}>{label}</Label>
          {hint && <Hint size='s' >{hint}</Hint>}
          {error && <Error id={`${id}-error`} >{error}</Error>}
          {children}
        </>
        }
    </div>
  );
};

Group.displayName = 'Group';

export default Group;
