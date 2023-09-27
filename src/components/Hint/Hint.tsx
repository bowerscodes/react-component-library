import { classBuilder, toArray } from '../../utils/Utils';
import './Hint.scss';

interface HintProps {
  hintText?: string;
  size?: 's' | 'm' | 'l';
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'hint';

export const Hint = ({
  hintText,
  size = 'm',
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size],
  className = '',
  ...props
  
}: HintProps) => {

  const classModifiers = [...toArray(size)];
  const classes = classBuilder(classBlock, classModifiers, className)


  return (
    <div className={classes()}>
      {hintText}
    </div>
  );
};

export default Hint;
