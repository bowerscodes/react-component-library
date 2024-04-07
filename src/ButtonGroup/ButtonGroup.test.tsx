import { screen, render } from '@testing-library/react';
import { ButtonProps } from '../Button/Button';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {

  const checkSetup = (container: any, testId: any, classBlock = 'button-group') => {
    const buttonGroup = screen.getByTestId(testId);
    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toHaveClass(classBlock);
    return buttonGroup;
  };

  const checkLabel = (container: any, testId: any, label: string) => {
    const buttonGroup = screen.getByTestId(testId);
    expect(buttonGroup).toHaveTextContent(label);
    return buttonGroup;
  };

  const checkHint = (container: any, testId: any, hint: string) => {
    const buttonGroup = screen.getByTestId(testId);
    expect(buttonGroup).toHaveTextContent(hint);
    return buttonGroup;
  };

  const checkContent = (container: any, testId: any, content: string) => {
    const buttonGroup = screen.getByTestId(testId);
    expect(buttonGroup).toHaveTextContent(content);
    return buttonGroup;
  };


  it('renders a button group with label, content, and standard Primary and Secondary buttons', () => {
    const buttonGroupId = 'button-group';
    const label = 'Button Group';
    const buttons: ButtonProps[] = [
      {
        id: "primary",
        children: "Primary",
        type: "primary"
      },
      {
        id: "secondary",
        children: "Secondary",
        type: "secondary"
      }
    ];
    const content = {
      text: "This is a paragraph",
      hint: "This is a hint"
    };

    const { container } = render(<ButtonGroup data-testid={buttonGroupId} id={buttonGroupId} label={label} buttons={buttons} content={content}/>);
    checkSetup(container, buttonGroupId);
    checkLabel(container, buttonGroupId, label);
    checkHint(container, buttonGroupId, content.hint);
    checkContent(container, buttonGroupId, content.text);
    
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toHaveClass('button--primary');
    expect(screen.getByText('Secondary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toHaveClass('button--secondary');
  });

});
