import { fireEvent, render, screen } from '@testing-library/react';
import Button, { DEFAULT_CLASS } from './Button';

describe('Button', () =>{

  const checkSetup = (container: any, testId: any, classBlock = DEFAULT_CLASS) => {
    const button = screen.getByTestId(testId);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(classBlock);
    return button;
  };

  const checkSize = (container: any, testId: any, size: string) => {
    const button = screen.getByTestId(testId);
    expect(button).toHaveClass(`${DEFAULT_CLASS}--${size}`);
    return button;
  };


  it('renders a primary button', () => {
    const buttonId = 'button';
    const className = 'button--primary';
    const { container } = render(<Button data-testid={buttonId} label="Primary" type="primary"></Button>);
    checkSetup(container, buttonId);
    expect(screen.getByTestId(buttonId)).toHaveClass(className);
  });

  it('renders a secondary button', () => {
    const buttonId = 'button';
    const className = 'button--secondary';
    const { container } = render(<Button data-testid={buttonId} label="Secondary" type="secondary"></Button>);
    checkSetup(container, buttonId);
    expect(screen.getByTestId(buttonId)).toHaveClass(className);
  });

  it('renders a warning button', () => {
    const buttonId = 'button';
    const className = 'button--warning';
    const { container } = render(<Button data-testid={buttonId} label="Warning" type="warning"></Button>);
    checkSetup(container, buttonId, 'button--warning');
    expect(screen.getByTestId(buttonId)).toHaveClass(className);
  });

  it('renders a small button', () => {
    const buttonId = 'button';
    const size = 's';
    const { container } = render(<Button data-testid={buttonId} label="Small" type="primary" size="s"></Button>);
    checkSetup(container, buttonId);
    checkSize(container, buttonId, size);
  });

  it('renders a medium button', () => {
    const buttonId = 'button';
    const size = 'm';
    const { container } = render(<Button data-testid={buttonId} label="Medium" type="primary" size="m"></Button>);
    checkSetup(container, buttonId);
    checkSize(container, buttonId, size);
  });

  it('renders a large button', () => {
    const buttonId = 'button';
    const size = 'l';
    const { container } = render(<Button data-testid={buttonId} label="Large" type="primary" size="l"></Button>);
    checkSetup(container, buttonId);
    checkSize(container, buttonId, size);
  });

  it('renders an extra large button', () => {
    const buttonId = 'button';
    const size = 'xl';
    const { container } = render(<Button data-testid={buttonId} label="Extra Large" type="primary" size="xl"></Button>);
    checkSetup(container, buttonId);
    checkSize(container, buttonId, size);
  });

  it('renders a disabled button which does not respond to clicks', () => {
    const buttonId = 'button';
    let clicks = 0;
    const ON_CLICK = () => clicks++;

    const { container } = render(<Button data-testid={buttonId} label="Disabled" type="primary" onClick={ON_CLICK} disabled></Button>);
    const button = checkSetup(container, buttonId);
    
    checkSetup(container, buttonId);
    expect(screen.getByTestId(buttonId)).toBeDisabled();

    expect(clicks).toEqual(0);
    fireEvent.click(button);
    expect(clicks).toEqual(0);
  });

  it('handles an onClick event', async () => {
    const buttonId = 'button';
    let clicks = 0;
    const ON_CLICK = () => clicks++;

    const { container } = render(<Button data-testid={buttonId} label="Click Me" type="primary" onClick={ON_CLICK}></Button>);
    const button = checkSetup(container, buttonId);

    expect(clicks).toEqual(0);
    fireEvent.click(button);
    expect(clicks).toEqual(1);
  });

});
