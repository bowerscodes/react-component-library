import React, { useCallback, useEffect, useState } from 'react';
import { classBuilder, cleanHtmlAttributes, toArray } from '../utils/Utils';

import './Select.scss';


export type SelectOption = {
  value: string;
  label: string;
};

interface Props {
  fieldId: string;
  id?: string;
  disabled?: boolean;
  error?: string;
  options: SelectOption[];
  item?: any;
  placeholder?: string;
  defaultValue?: SelectOption | string | null;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  returnFullData?: boolean;
  target?: any;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'select';
export const DEFAULT_PLACEHOLDER = 'Select an option';

export const Select = ({
  fieldId,
  id = fieldId,
  disabled,
  error,
  options,
  item,
  placeholder,
  defaultValue = '',
  value = defaultValue,
  onChange,
  returnFullData,
  target,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: Props) => {

  const classModifiers = [...toArray(_classModifiers), error && 'error']
  const classes = classBuilder(classBlock, classModifiers, className)
  const cleanedAttrs = cleanHtmlAttributes(attrs)
  
  const [selected, setSelected] = useState(value || defaultValue || '');
  const [cachedOptions, setCachedOptions] = useState(options || []);

  useEffect(() => {
    const newValue = (typeof value !== 'string') ? value?.value : value.toString();
    setSelected(newValue || defaultValue || '');
  }, [value, defaultValue, item?.id]);

  const onSelectChanged = useCallback(({ target }: any) => {
    const selectedValue = target.value;
    const selectedOption = returnFullData ? options?.find(option => option.value === selectedValue) : selectedValue;
    setSelected(selectedValue);
    onChange && onChange({
      target: {
        name: fieldId,
        value: selectedOption
      }
    } as React.ChangeEvent<HTMLSelectElement>);
  }, [options, onChange, fieldId, returnFullData]);

  useEffect(() => {
    const checkEqual = (cachedOptions: string | any[], options: string | any[]) => (
      cachedOptions?.length === options?.length &&
      cachedOptions[0]?.value === options[0]?.value &&
      cachedOptions[cachedOptions.length - 1]?.value === options[options.length -1]?.value
    );

    if (!checkEqual(cachedOptions, options)) {
      if (cachedOptions.length > 0) {
        onSelectChanged({ target: {value: '' }});
      }
      setCachedOptions(options);
    }
  }, [cachedOptions, onSelectChanged, options]);


  const idParts = id.split('.');
  idParts.pop();
  idParts.push(fieldId)
  const name = idParts.join('.')
  
  return (
    <select
    id={id}
    name={name}
    value={selected}
    disabled={disabled}
    onChange={onSelectChanged}
    className={classes()}
    {...cleanedAttrs}
    >
      {options?.map((option, index) => {
        const optionId = `${id}-${index}`;
        const label = option.label;
        return (
          <option key={optionId} id={optionId} value={option.value} className={classes('option')}>
            {label}
          </option>
        );
      })}
      <option value='' disabled hidden>{placeholder || DEFAULT_PLACEHOLDER}</option>
    </select>   
  );
};

Select.displayName = 'Select';

export default Select;
