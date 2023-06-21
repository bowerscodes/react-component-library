import '../../main.scss';
import './ButtonGroup.scss';


interface ButtonGroupProps {
  buttons?: React.ReactNode;
  content?: Array <React.ReactNode>;
  label?: React.ReactNode;
};

export const ButtonGroup = ({
  buttons = [],
  content = [],
  label = 'Button Group',
  ...attrs
}: ButtonGroupProps) => {
  return (
    <div className='button-group' {...attrs} >
      {label}
      {content}
      {buttons}
    </div>
  )
};
