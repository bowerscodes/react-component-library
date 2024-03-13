import Label from '../Label';
import Hint from '../Hint';
import Error from '../Error';
import './Group.scss';
import { classBuilder, cleanHtmlAttributes, toArray } from '../../utils/Utils';
import React from 'react';

export const DEFAULT_CLASS = 'group';

export type GroupProps = {
  children: React.ReactNode;
  id: string;
  label: string;
  hint?: string;
  error?: React.ReactNode;
  fieldset?: boolean;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const Group = ({
  children,
  id,
  label,
  hint,
  error,
  fieldset = false,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: GroupProps) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className);
  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div {...cleanedAttrs} key={id} className={classes()}>
      {fieldset && 
        <fieldset className={classes('fieldset')}>
          <legend className={classes('legend')}>
            <Label id={id}>{label}</Label>
          </legend>
          {hint && <Hint>{hint}</Hint>}
          {error && <Error id={`${id}-error`}>{error}</Error>}
          {children}
        </fieldset>}
        {!fieldset && 
        <>
          <Label id={id}>{label}</Label>
          {hint && <Hint>{hint}</Hint>}
          {error && <Error id={`${id}-error`} >{error}</Error>}
          {children}
        </>
        }
    </div>
  );
};

export default Group;
