import { Label } from '../Label/Label';
import { classBuilder, cleanHtmlAttributes, COMPONENT_TYPES, toArray } from '../../utils/Utils';
import './TextInput.scss';

interface TextInputProps {
  id: string;
  fieldId?: string;
  disabled?: boolean;
  error?: any;
  readonly?: boolean;
  textInputLabel?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  width?: 's' | 'm' | 'l' | 'xl' | 'one-half' | 'one-third' | 'two-thirds';
  classBlock?: any;
  classModifiers?: any;
  className?: any;
  attrs?: any;
};

export const DEFAULT_CLASS = 'textInput'

export const TextInput = ({
  id,
  fieldId = id,
  disabled = false,
  error = false,
  readonly = false,
  textInputLabel,
  placeholder,
  onChange,
  width = 'm',
  classBlock ='textInput',
  classModifiers: _classModifiers = [width],
  className = '',
  ...attrs
}: TextInputProps) => {
  
  const classModifiers = [...toArray(_classModifiers), error ? 'error' : undefined];
  const classes = classBuilder(classBlock, classModifiers, className)

  const cleanedAttrs = cleanHtmlAttributes(attrs, COMPONENT_TYPES.INPUT)

  const label = <Label children={textInputLabel} />
  
  const input = (
    <div className="input-container">
      {textInputLabel && label}
      <input
        {...cleanedAttrs}
        disabled={disabled}
        id={id}
        name={fieldId}
        type="text"
        onChange={onChange}
        className={classes()}
      />
    </div>
  );

  return input;
};

export default TextInput;
