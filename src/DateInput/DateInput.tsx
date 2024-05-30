import React, { useEffect, useState } from'react';

import Group from '../Group';
import TextInput from '../TextInput';
import { classBuilder, cleanHtmlAttributes } from '../utils/Utils';
import './DateInput.scss';


export const DEFAULT_CLASS = 'date-input';

const toDateFromString = (string: string | undefined) => {
  if (string) {
    const [ day, month, year ] = string.split('-');
    return { day, month, year };
  }
  return { day: '', month: '', year: '' };
};

const toStringFromDate = (date: any) => {
  if (date) {
    const string = `${date.day}-${date.month}-${date.year}`;
    return string === '--' ? '' : string
  }
  return '';
};

export type DateInputProps = {
  fieldId: string;
  id?: string;
  errors?: string;
  propsInError?: { year: boolean; month: boolean; day: boolean; };
  value?: string | undefined;
  onChange?: Function;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

type DatePart = 'day' | 'month' | 'year';

export const DateInput = ({
  fieldId,
  id = fieldId,
  errors,
  propsInError,
  value,
  onChange,
  classBlock = DEFAULT_CLASS,
  classModifiers,
  className,
  ...attrs
}: DateInputProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);
  const [ date, setDate ] = useState({ day: '', month: '', year: '' });
  const [ dateChanged, setDateChanged ] = useState(false);

  useEffect(() => {
    setDate(prev => {
      const existingDate=toStringFromDate(prev);
      if (existingDate !== (value || '')) {
        setDateChanged(true);
        const newDate = toDateFromString(value);
        if (newDate.day !== prev.day || newDate.month !== prev.month || newDate.year !== prev.year) {
          return newDate;
        }
      }
      return {...prev};
    });
  }, [value]);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name.replace(`${fieldId}-`, '') as DatePart;
    const { value } = event.target;
    if (date && date[name] !== value && value !== undefined) {
      setDate((prev) => ({ ...prev, [name]: value }));
      setDateChanged(true);
    }
  };

  const DATE_PARTS = [
    { id: 'day', width: '2', label: 'Day' },
    { id: 'month', width: '2', label: 'Month' },
    { id: 'year', width: '4', label: 'Year' }
  ];

  useEffect(() => {
    if (typeof onChange === 'function' && dateChanged) {
      const newValue = toStringFromDate(date);
      setDateChanged(false);
      onChange({ target: { name: fieldId, value: newValue }});
    }
  }, [dateChanged, value, date, fieldId, onChange]);

  if (!date) {
    return null;
  }

  const cleanedAttrs = cleanHtmlAttributes(attrs);
  const inputAttrs = {
    onChange: handleChange,
    pattern: '[0-9*]', 
    inputMode: 'numeric',
  }


  return (
    <div {...cleanedAttrs} className={DEFAULT_CLASS} id={id} data-name={fieldId}>
      {DATE_PARTS.map((part) => (
        <Group fieldId={`${id}-${part.id}`} label={part.label} labelSize='xs' classBlock={classes('item')} key={`${id}-${part.id}`}>
          <TextInput
            id={`${id}-${part.id}`}
            fieldId={`${fieldId}-${part.id}`}
            value={date[part.id as DatePart]}
            errors={propsInError && propsInError[part.id as DatePart] ? 'error' : ''}
            className={classes('input')}
            classModifiers={`width-${part.width}`}
            {...inputAttrs}
          />
        </Group>
      ))}
    </div>
  );
};

DateInput.displayName = 'DateInput';

export default DateInput;
