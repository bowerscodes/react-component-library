import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import './Select.scss';


type Option = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  fieldId: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  options: Option[];
  item?: any;
  value?: any;
  defaultValue?: Option;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  target?: any;
};

export const Select = ({
  id,
  fieldId = id,
  label,
  disabled,
  error,
  options,
  item,
  value,
  defaultValue,
  onChange,
  ...attrs
}: Props) => {
  
  const [selected, setSelected] = useState(value || defaultValue || '');
  const [cachedOptions, setCachedOptions] = useState(options || []);

  useEffect(() => {
    const newValue = (typeof value !== 'string') ? value?.value : value.toString();
    setSelected(newValue || '');
  }, [value, item?.id]);

  const onSelectChanged = useCallback(({ target }: any) => {
    const selectedValue = target.value;
    const selectedOption = options?.find(option => option.value === selectedValue) || selectedValue;
    setSelected(selectedValue);
    onChange && onChange({
      target: {
        name: fieldId,
        value: selectedOption
      }
    } as React.ChangeEvent<HTMLSelectElement>);
  }, [onChange, fieldId, options]);

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
    {...attrs}
    >
      {options?.map((option, index) => {
        const optionId = `${id}-${index}`;
        const label = option.label;
        return (
          <option key={optionId} id={optionId} value={option.value} className='select-option'>
            {label}
          </option>
        );
      })}
    </select>   
  );
};

export default Select;
