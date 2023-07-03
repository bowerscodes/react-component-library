import { Checkbox } from './Checkbox';
import './Checkboxes.scss';
import '../../main.scss'

type Props = {
  id?: string;
  label?: string;
  options: Array<typeof Checkbox>;
};

export const Checkboxes = ({
  id,
  label,
  options,
  ...attrs
}: Props) => {

  let onChange: () => void;

  return (
    <div className="checkboxes-container" {...attrs}>
      <fieldset>
        <legend className="label label--m">
          {label}
        </legend>
        {options?.map(option => (
          <Checkbox 
            id={''} 
            value={''} 
            label={''} 
            {...option}
          />
        ))}
      </fieldset>
    </div>
  );
};
