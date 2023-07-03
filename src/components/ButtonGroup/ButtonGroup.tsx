import { Button } from '../Button/Button';
import { Hint } from '../Hint/Hint';
import { Label } from '../Label/Label';
import '../../main.scss';
import './ButtonGroup.scss';

interface ButtonGroupProps {
  label: string;
  buttons: Array<typeof Button>;
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
      {label && <Label key={label} children={label}/>}
      {content.text && <p className="paragraph">{content.text}</p>}
      {content.hint && <Hint key={content.hint} hintText={content.hint} size="s"/>}
      {buttonsArray.map(button => {
        return <Button key={button.key || button.id} {...button}/>;
      })}
    </div>
  );
};
