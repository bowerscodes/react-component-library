import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { DEFAULT_CLASS } from './Button';

describe('Button', () => {

  const checkSetup = (container: any, testId: string, type: string) => {
    const button = screen.getByTestId(testId);
    const className = `${DEFAULT_CLASS}--${type}`;
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(className);
    return button;
  };

  const checkSize = (container: any, testId: any, size: string) => {
    const button = screen.getByTestId(testId);
    const className = `${DEFAULT_CLASS}--${size}`;
    expect(button).toHaveClass(className);
    return button;
  };

  const DEFAULT_TYPE = 'primary';


  it('renders a primary button', () => {
    const buttonId = 'button';
    const type = 'primary';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={type} label="Primary"></Button>);
    checkSetup(container, buttonId, type);
  });

  it('renders a secondary button', () => {
    const buttonId = 'button';
    const type = 'secondary';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={type} label="Secondary"></Button>);
    checkSetup(container, buttonId, type);
  });

  it('renders a warning button', () => {
    const buttonId = 'button';
    const type = 'warning';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={type} label="Warning"></Button>);
    checkSetup(container, buttonId, type);
  });

  it('renders a small button', () => {
    const buttonId = 'button';
    const size = 's';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={DEFAULT_TYPE} size="s" label="Small"></Button>);
    checkSetup(container, buttonId, DEFAULT_TYPE);
    checkSize(container, buttonId, size);
  });

  it('renders a medium button', () => {
    const buttonId = 'button';
    const size = 'm';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={DEFAULT_TYPE} size="m" label="Medium" ></Button>);
    checkSetup(container, buttonId, DEFAULT_TYPE);
    checkSize(container, buttonId, size);
  });

  it('renders a large button', () => {
    const buttonId = 'button';
    const size = 'l';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={DEFAULT_TYPE} size="l" label="Large"></Button>);
    checkSetup(container, buttonId, DEFAULT_TYPE);
    checkSize(container, buttonId, size);
  });

  it('renders an extra large button', () => {
    const buttonId = 'button';
    const size = 'xl';
    const { container } = render(<Button id={buttonId} data-testid={buttonId} type={DEFAULT_TYPE} size="xl" label="Extra Large"></Button>);
    checkSetup(container, buttonId, DEFAULT_TYPE);
    checkSize(container, buttonId, size);
  });

  it('renders a disabled button which does not respond to clicks', () => {
    const buttonId = 'button';
    let clicks = 0;
    const ON_CLICK = () => clicks++;

    const { container } = render(<Button id={buttonId} data-testid={buttonId} label="Disabled" type="primary" onClick={ON_CLICK} disabled></Button>);
    const button = checkSetup(container, buttonId, DEFAULT_TYPE);
    
    expect(screen.getByTestId(buttonId)).toBeDisabled();

    expect(clicks).toEqual(0);
    fireEvent.click(button);
    expect(clicks).toEqual(0);
  });

  it('handles an onClick event', async () => {
    const buttonId = 'button';
    let clicks = 0;
    const ON_CLICK = () => clicks++;

    const { container } = render(<Button id={buttonId} data-testid={buttonId} label="Click Me" type="primary" onClick={ON_CLICK}></Button>);
    const button = checkSetup(container, buttonId, DEFAULT_TYPE);

    expect(clicks).toEqual(0);
    fireEvent.click(button);
    expect(clicks).toEqual(1);
  });

});
