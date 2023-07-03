import './Radios.scss';
import { Label } from '../Label/Label';

type Option = {
  key?: string;
  id: string;
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: Array<Option>
};

export const Radios = ({
  label,
  options
}: Props) => {

  return (
    <div className="radios-container">
      <fieldset>
        <legend className="fieldset-legend">
          <Label children={label}/>
        </legend>
        {options && options.map(option => {
          return (
            <label key={option.key || option.id} className="radios-label">
              <input
                type="radio"
                name="radio"
                className="radios-input"
                value={option.value}
              />
              {option.label}
            </label>
          )
        })}
      </fieldset>
    </div>
  )
};

