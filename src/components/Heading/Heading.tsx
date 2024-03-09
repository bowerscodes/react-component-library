import { classBuilder, toArray } from '../../utils/Utils';
import './Heading.scss';

type Props = {
  id?: string;
  headingText: string;
  children?: React.ReactNode;
  size?: "s" | "m" | "l" | "xl";
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'heading';

export const Heading = ({
  id,
  headingText,
  children,
  size = "m",
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [size],
  className = '',
}: Props) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className)

  return (
    <div className={classes('container')}>
      <h1 className={classes()} id={id}>
        {headingText ? headingText : children || null}
      </h1>
    </div>
  )
};

export default Heading;
