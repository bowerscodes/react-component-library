import './Radios.scss';
import Label from '../Label';

export type Option = {
  key?: string;
  id: string;
  value: string;
  label: string;
};

export type Props = {
  id?: string;
  label: string;
  options: Option[];
  classBlock?: string;
};

export const DEFAULT_CLASS = 'radios';

export const Radios = ({
  id,
  label,
  options,
  classBlock = DEFAULT_CLASS
}: Props) => {

  return (
    <div id={id && id} className={`${classBlock}-container`}>
      <fieldset>
        <legend className="fieldset-legend">
          <Label children={label}/>
        </legend>
        {options && options.map(option => {
          return (
            <label key={option.key || option.id} className={`${classBlock}-label`}>
              <input
                id={option.id}
                type="radio"
                name="radio"
                className={`${classBlock}-input`}
                value={option.value}
              />
              {option.label}
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};

export default Radios;
