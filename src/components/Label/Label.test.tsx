import Label, { DEFAULT_CLASS } from './Label';
import { render, screen } from '@testing-library/react';

describe('Label', () => {
  const checkSetup = (container: any, label: any, classBlock = DEFAULT_CLASS) => {
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(classBlock);
    return labelElement;
  };

  const checkSize = (container: any, label: any, size: string) => {
    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveClass(`${DEFAULT_CLASS}--${size}`);
    return labelElement;
  };

  it('renders an extra small label', () => {
    const id = 'label';
    const label = 'Small';
    const size = 'xs';
    const { container } = render(<Label id={id} size={size}>{label}</Label>);
    checkSetup(container, label);
    checkSize(container, label, size);
  });

  it('renders a small label', () => {
    const id = 'label';
    const label = 'Small';
    const size = 's';
    const { container } = render(<Label id={id} size={size}>{label}</Label>);
    checkSetup(container, label);
    checkSize(container, label, size);
  });

  it('renders a medium label', () => {
    const id = 'label';
    const label = 'Medium';
    const size = 'm';
    const { container } = render(<Label id={id} size={size}>{label}</Label>);
    checkSetup(container, label);
    checkSize(container, label, size);
  });

  it('renders a large label', () => {
    const id = 'label';
    const label = 'Large';
    const size = 'l';
    const { container } = render(<Label id={id} size={size}>{label}</Label>);
    checkSetup(container, label);
    checkSize(container, label, size);
  });

  it('renders an extra large label', () => {
    const id = 'label';
    const label = 'Large';
    const size = 'xl';
    const { container } = render(<Label id={id} size={size}>{label}</Label>);
    checkSetup(container, label);
    checkSize(container, label, size);
  });

});
