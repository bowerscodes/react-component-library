import Radio, { Option } from './Radio';
import { classBuilder, cleanHtmlAttributes } from '../utils/Utils';
import './Radios.scss';



export type RadiosProps = {
  id: string;
  fieldId: string;
  options: Option[];
  value?: string | { value: string };
  onChange?: Function;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'radios';

export const Radios = ({
  id,
  fieldId,
  options,
  value,
  onChange,
  classBlock = DEFAULT_CLASS,
  classModifiers = [],
  className = '',
  ...attrs
}: RadiosProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);

  const idParts = id.split('.');
  idParts.pop();
  idParts.push(fieldId);
  const name = idParts.join('.');

  const internalOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const truncatedName = target.name.split('.').pop();
    if (typeof onChange === 'function' && truncatedName === fieldId) {
      onChange({
        target: {
          name: fieldId,
          value: target.value
        }
      });
    }
  };

  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div {...cleanedAttrs} id={id} className={classes()} onChange={internalOnChange}>
        {options && options.map((option, index) => {
          const optionId = `${id}-${index}`
          if (typeof option === 'string') {
            return <div className={classes('divider')} key={optionId}>{option}</div>
          }
          const selected = typeof value === 'object' ? (option.value === value?.value) : (option.value === value);
          return (
            <Radio 
              key={optionId}
              id={optionId}
              name={name}
              option={option}
              selected={selected}
              classBlock={classBlock}
              classModifiers={classModifiers}
              className={className}
            />
          );
        })}
    </div>
  );
};

export default Radios;
