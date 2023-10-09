import Hint, { DEFAULT_CLASS } from './Hint';
import { render, screen } from '@testing-library/react';

describe('Hint', () => {
  const checkSetup = (container: any, hint: any, classBlock = DEFAULT_CLASS) => {
    const hintElement = screen.getByText(hint);
    expect(hintElement).toBeInTheDocument();
    expect(hintElement).toHaveClass(classBlock);
    return hintElement;
  };

  const checkSize = (container: any, hint: any, size: string) => {
    const hintElement = screen.getByText(hint);
    expect(hintElement).toHaveClass(`${DEFAULT_CLASS}--${size}`);
    return hintElement;
  };

  it('renders a small hint', () => {
    const hint = 'Small';
    const size = 's';
    const { container } = render(<Hint children={hint} size="s"></Hint>);
    checkSetup(container, hint);
    checkSize(container, hint, size);
  });

  it('renders a medium hint', () => {
    const hint = 'Medium';
    const size = 'm';
    const { container } = render(<Hint children={hint} size="m"></Hint>);
    checkSetup(container, hint);
    checkSize(container, hint, size);
  });

  it('renders a large hint', () => {
    const hint = 'Large';
    const size = 'l';
    const { container } = render(<Hint children={hint} size="l"></Hint>);
    checkSetup(container, hint);
    checkSize(container, hint, size);
  });

});
