import Button, { ButtonProps } from '../Button/Button';
import Hint  from '../Hint/Hint';
import Label from '../Label';
import './ButtonGroup.scss';


export type ContentProps = {
  text?: string;
  hint?: string;
};

export type ButtonGroupProps = {
  label: string;
  buttons: ButtonProps[];
  content?: ContentProps;
};


export const ButtonGroup = ({
  label,
  buttons,
  content,
  ...attrs
}: ButtonGroupProps) => {

  return (
    <div key={label} className='button-group' {...attrs} >
      {label && <Label children={label}/>}
      {content?.text && <p className="paragraph">{content.text}</p>}
      {content?.hint && <Hint hintText={content.hint} size='s' />}
      {buttons.map(button => {
        return <Button {...button}/>;
      })}
    </div>
  );
};

export default ButtonGroup;
