import { useEffect } from 'react';

import { 
  classBuilder, 
  cleanHtmlAttributes, 
  COMPONENT_TYPES, 
  toArray 
} from '../utils/Utils';
import './TextArea.scss';

export const DEFAULT_ROWS = 4;
export const DEFAULT_CLASS = 'text-area';

type TextAreaProps = {
  id: string;
  fieldId?: string;
  rows?: number;
  disabled?: boolean;
  error?: string;
  readonly?: boolean;
  width?: 'half' | 'one-third' | 'two-thirds' | 'full';
  value?: string | undefined;
  classBlock?: any;
  classModifiers?: any;
  className?: any;
};

const TextArea = ({ 
  id, 
  fieldId = id, 
  rows = DEFAULT_ROWS, 
  disabled = false, 
  error, 
  readonly = false, 
  width = 'full', 
  value = undefined, 
  classBlock = DEFAULT_CLASS, 
  classModifiers: _classModifiers = [width], 
  className = null, 
  ...attrs 
}: TextAreaProps) => {
  
  const classModifiers = [...toArray(_classModifiers), error && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className)

  const cleanedAttrs = cleanHtmlAttributes(attrs, COMPONENT_TYPES.INPUT)

  const textArea = (
    <textarea
      {...cleanedAttrs}
      disabled={disabled}
      id={id}
      name={fieldId}
      rows={rows}
      value={value}
      className={classes()}
    />
  );
  
  useEffect(() => {
    console.log('value: ',value, 'text: ')
  }, [value])

  return textArea;
};

TextArea.displayName = 'TextArea';

export default TextArea;
