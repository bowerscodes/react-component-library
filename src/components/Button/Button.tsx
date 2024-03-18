import { classBuilder, toArray } from '../../utils/Utils';
import './Button.scss';

export type ButtonProps = {
  key?: string;
  id: string;
  children?: any;
  label?: string;
  disabled?: boolean;
  type: 'primary' | 'secondary' | 'warning';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '';
  onClick?: () => void;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'button';

export const Button = ({
  key,
  id,
  children,
  label = children,
  disabled = false,
  type = 'primary',
  size = '',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [type, size],
  className = '',
  ...attrs
}: ButtonProps) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)
  
  return (
    <button 
      aria-disabled={disabled}
      disabled={disabled}
      {...attrs}
      className={classes()}
    >
      {label ? label : children}
    </button>
  );
};

export default Button;
