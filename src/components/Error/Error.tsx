import { classBuilder } from '../../utils/Utils';
import Hidden from '../Hidden'
import './Error.scss';


export type ErrorProps = {
  children: any;
  id?: string;
  classBlock?: string;
  classModifiers?: string | string[];
  className?: string;
};

export const DEFAULT_CLASS = 'error';

export const Error = ({
    children,
    id,
    classBlock = DEFAULT_CLASS,
    classModifiers,
    className = '',
    ...attrs
}: ErrorProps) => {

  const classes = classBuilder(classBlock, classModifiers, className);

  return (
    <span {...attrs} className={classes()}>
      {<Hidden>Error: </Hidden>}
      {children}
    </span>
  )
};

export default Error;
