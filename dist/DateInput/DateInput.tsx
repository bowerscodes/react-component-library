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
  id: string;
  fieldId: string;
  error?: string;
  propsInError?: { year: boolean; month: boolean; day: boolean; };
  value?: string | undefined;
  onChange?: Function;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

type DatePart = 'day' | 'month' | 'year';

export const DateInput = ({
  id,
  fieldId,
  error,
  propsInError,
  value,
  onChange,
  classBlock = DEFAULT_CLASS,
  classModifiers,
  className,
  ...attrs
}: DateInputProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);
  const [ date, setDate ] = useState<{ day?: string, month?: string, year?: string } | undefined>(undefined);
  const [ dateChanged, setDateChanged ] = useState(false);

  useEffect(() => {
    setDate(prev => {
      const existingDate=toStringFromDate(prev);
      if (existingDate !== (value || '')) {
        setDateChanged(true);
        return toDateFromString(value);
      }
      return prev || toDateFromString(value);
    });
  }, [value, setDate, setDateChanged]);

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
  }, [dateChanged, date, fieldId, onChange, setDateChanged]);

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
        <Group id={`${id}-${part.id}`} label={part.label} labelSize='xs' classBlock={classes('item')} key={`${id}-${part.id}`}>
          <TextInput
            id={`${id}-${part.id}`}
            fieldId={`${fieldId}-${part.id}`}
            value={date[part.id as DatePart]}
            error={propsInError && propsInError[part.id as DatePart] ? 'error' : ''}
            className={classes('input')}
            classModifiers={`width-${part.width}`}
            {...inputAttrs}
          />
        </Group>
      ))}
    </div>
  );
};

export default DateInput;
