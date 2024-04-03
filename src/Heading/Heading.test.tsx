import Heading, { DEFAULT_CLASS } from './Heading';
import { render, screen } from '@testing-library/react';

describe('Heading', () => {
  const checkSetup = (container: any, headingText: any, classBlock = DEFAULT_CLASS) => {
    const heading = screen.getByText(headingText);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(classBlock);
    return heading;
  };

  const checkSize = (container: any, headingText: any, size: string) => {
    const heading = screen.getByText(headingText);
    expect(heading).toHaveClass(`${DEFAULT_CLASS}--${size}`);
    return heading;
  };

  const checkHNumber = (container: any, headingText: any, hNumber: number) => {
    const heading = screen.getByText(headingText);
    expect(heading.tagName).toBe(`H${hNumber}`);
    return heading;
  };

  it('renders a small heading', () => {
    const headingText = 'Small';
    const headingId = 'heading';
    const size = 's';
    const { container } = render(<Heading id={headingId} headingText={headingText} size="s"></Heading>);
    checkSetup(container, headingText);
    checkSize(container, headingText, size);
  });

  it('renders a medium heading', () => {
    const headingText = 'Medium';
    const headingId = 'heading';
    const size = 'm';
    const { container } = render(<Heading id={headingId} headingText={headingText} size="m"></Heading>);
    checkSetup(container, headingText);
    checkSize(container, headingText, size);
  });

  it('renders a large heading', () => {
    const headingText = 'Large';
    const headingId = 'heading';
    const size = 'l';
    const { container } = render(<Heading id={headingId} headingText={headingText} size="l"></Heading>);
    checkSetup(container, headingText);
    checkSize(container, headingText, size);
  });

  it('renders the correct heading tag', () => {
    const hNumbers = [ 1, 2, 3, 4, 5, 6 ];
    
    hNumbers.forEach(hNumber => {
      const headingText = `Heading ${hNumber}`;
      const headingId = `heading-${hNumber}`;

      const { container } = render(<Heading id={headingId} headingText={headingText} hNumber={hNumber}></Heading>);
      checkSetup(container, headingText);
      checkHNumber(container, headingText, hNumber);
    });
  });

});
