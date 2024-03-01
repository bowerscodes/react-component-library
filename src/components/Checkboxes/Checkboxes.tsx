import { useRef } from 'react';

import Checkbox, { CheckboxOption } from './Checkbox';
import { cleanHtmlAttributes } from '../../utils/Utils';
import './Checkboxes.scss';

export const DEFAULT_CLASS = 'checkboxes';

export type CheckboxesProps = {
  id: string;
  fieldId?: string;
  name?: string;
  label: string;
  options: Array<CheckboxOption>;
  value?: string | { value: string }[];
  onChange?: (selection: string[]) => {};
  classBlock?: string;
};

export const Checkboxes = ({
  id,
  fieldId = id,
  name = id,
  label,
  options = [],
  value = [],
  onChange = () => ({}),
  classBlock = DEFAULT_CLASS,
  ...attrs
}: CheckboxesProps) => {

  const selection = useRef<string[]>([]);

  const handleCheckboxChange = (option: CheckboxOption) => {
    const optionValue = option.value;
    const index = selection.current.indexOf(optionValue);

    if (index === -1) {
      selection.current = [...selection.current, optionValue];
    } else {
      selection.current = [...selection.current.slice(0, index), ...selection.current.slice(index + 1)];
    }
    onChange(selection.current);
  };

  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div {...cleanedAttrs} className={`${classBlock}-container`}>
      <fieldset id={id}>
        <legend className="label label--m">
          {label}
        </legend>
        {options.map((option) => (
          <Checkbox
            key={option.key}
            id={`${id}-${option.key}`}
            name={name}
            option={option}
            checked={selection.current.includes(option.value)}
            onChange={() => handleCheckboxChange(option)}
            {...attrs}
          />
        ))}
      </fieldset>
    </div>
  );
};

export default Checkboxes;
