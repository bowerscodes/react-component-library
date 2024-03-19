import { classBuilder, cleanHtmlAttributes, COMPONENT_TYPES, toArray } from '../utils/Utils';
import './TextInput.scss';

interface TextInputProps {
  id: string;
  fieldId?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: any;
  readonly?: boolean;
  width?: 's' | 'm' | 'l' | 'xl' | 'one-half' | 'one-third' | 'two-thirds';
  classBlock?: any;
  classModifiers?: any;
  className?: any;
  attrs?: any;
};

export const DEFAULT_CLASS = 'input'

export const TextInput = ({
  id,
  fieldId = id,
  value,
  onChange,
  disabled = false,
  error = false,
  readonly = false,
  width = 'm',
  classBlock =DEFAULT_CLASS,
  classModifiers: _classModifiers = [width],
  className = null,
  ...attrs
}: TextInputProps) => {
  
  const classModifiers = [...toArray(_classModifiers), error && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className)

  const cleanedAttrs = cleanHtmlAttributes(attrs, COMPONENT_TYPES.INPUT)
  
  const input = (
    <input
      {...cleanedAttrs}
      disabled={disabled}
      id={id}
      name={fieldId}
      type='text'
      className={classes()}
    />
  );

  return input;
};

export default TextInput;