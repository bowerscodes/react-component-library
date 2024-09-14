import React, { useEffect, useRef } from 'react';

import Checkbox, { CheckboxOption } from './Checkbox';
import { classBuilder, toArray, cleanHtmlAttributes } from '../utils/Utils';
import './Checkboxes.scss';

export const DEFAULT_CLASS = 'checkboxes';

export type CheckboxesEventTarget = EventTarget & { name?: string; value: string | string[] };

export type CheckboxesProps = {
  fieldId: string;
  id?: string;
  options: Array<CheckboxOption>;
  errors?: string[];
  value?: string[];
  onChange?: (event: React.ChangeEvent<CheckboxesEventTarget>) => void;
  classBlock?: string;
  classModifiers?: string | string[];
  className?: string;
};

export const Checkboxes = ({
  fieldId,
  id = fieldId,
  options = [],
  errors,
  value = [],
  onChange = (event: React.ChangeEvent<CheckboxesEventTarget>) => {},
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: CheckboxesProps) => {

  const classModifiers = [...toArray(_classModifiers), errors && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className);

  const selection = useRef<any>([]);

  const handleOnChange = () => {
    if (typeof onChange === 'function' && selection.current !== value) {
      const event = { 
        target: { name: fieldId, value: selection.current } 
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }  
  };

  const updateSelection = (event: { target: { name: string; value: string; checked: boolean} }, option: CheckboxOption) => {
    const {value, checked} = event.target;
    // const targetValue = value;
    if (checked) {
      selection.current = [...selection.current, value];
    } 
    else {
      selection.current = selection.current.filter((s:any) => s !== value);
    }
    handleOnChange();
  };

  useEffect(() => {
    selection.current = value || [];
  }, [value]);
  

  const idParts = (id || '').split('.');
  idParts.pop();
  idParts.push(fieldId);
  const name = idParts.join('.');
  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div {...cleanedAttrs} id={id} className={classes()}>
      {options && options.map((option, index) => {
        const optionId = `${id}-${index}`;
        if (typeof option === 'string') {
          return <div className={classes('divider')} key={optionId}>{option}</div>;
        }
        return (
          <Checkbox
            key={optionId}
            id={optionId}
            name={name}
            option={option}
            error={errors && true}
            checked={selection.current.includes(option.value)}
            onChange={event => updateSelection(event, option)}
          />
        );
      })}
    </div>
  );
};

Checkboxes.displayName = 'Checkboxes';

export default Checkboxes;
