import '../../main.scss';
import './ButtonGroup.scss';
import { Button } from '../Button/Button';
import { Hint } from '../Hint/Hint';
import { Label } from '../Label/Label';

interface ButtonGroupProps {
  buttons: Array<{
    id?: string;
    type: string;
    size?: string;
    label: string;
  }>;
  content?: any
  // {
  //   text: string;
  //   hint: string;
  // };
  label?: string;
};

export const ButtonGroup = ({
  buttons,
  content,
  label = 'Button Group',
  ...attrs
}: ButtonGroupProps) => {
  
  let buttonsArray: Array<any> = [];
    
  buttons.map(button => {
    return buttonsArray.push(button);
  });

  let buttonComponents: Array<React.ReactNode> = buttonsArray.map(button => {
    return <Button {...button}/>;
  });

  let contentComponents = []

  content.text && contentComponents.push(
    <p className="paragraph">{content.text}</p>
  );
  content.hint && contentComponents.push(
    <Hint hintText={content.hint} size="s"/>
  );

  return (
    <div className='button-group' {...attrs} >
      {label && <Label children={label}/>}
      {contentComponents}
      {buttonComponents}
    </div>
  );
};
