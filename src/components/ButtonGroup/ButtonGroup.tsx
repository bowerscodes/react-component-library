import Button from '../Button';
import Hint  from '../Hint';
import Label from '../Label';
import './ButtonGroup.scss';

interface ButtonGroupProps {
  label: string;
  buttons: Array<any>;
  content?: any;
};

export const ButtonGroup = ({
  label,
  buttons,
  content,
  ...attrs
}: ButtonGroupProps) => {
  
  let buttonsArray: Array<any> = [];
    
  buttons.map(button => {
    return buttonsArray.push(button);
  });


  return (
    <div key={label} className='button-group' {...attrs} >
      {label && <Label children={label}/>}
      {content.text && <p className="paragraph">{content.text}</p>}
      {content.hint && <Hint {...content.hint}/>}
      {buttonsArray.map(button => {
        return <Button {...button}/>;
      })}
    </div>
  );
};

export default ButtonGroup;
