import Label from '../Label';
import Hint from '../Hint';
import './Group.scss';
import { classBuilder, cleanHtmlAttributes, toArray } from '../../utils/Utils';

export const DEFAULT_CLASS = 'group';

export type GroupProps = {
  children: React.ReactNode;
  id: string;
  label: string;
  hint?: string;
  fieldset?: boolean;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const Group = ({
  children,
  id,
  label,
  hint,
  fieldset = false,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className = '',
  ...attrs
}: GroupProps) => {

  const classModifiers = [...toArray(_classModifiers)];
  const classes = classBuilder(classBlock, classModifiers, className);
  const cleanedAttrs = cleanHtmlAttributes(attrs);

  return (
    <div {...cleanedAttrs} key={id} className={classes()}>
      {fieldset && 
        <fieldset className={classes('fieldset')}>
          <legend className={classes('legend')}>
            <Label id={id}>{label}</Label>
          </legend>
          {hint && <Hint>{hint}</Hint>}
          {children}
        </fieldset>}
        {!fieldset && 
        <>
          <Label id={id}>{label}</Label>
          {hint && <Hint>{hint}</Hint>}
          {children}
        </>
        }
    </div>
  );
};

export default Group;
