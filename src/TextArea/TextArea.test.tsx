import { render, screen } from '@testing-library/react';
import TextArea, { DEFAULT_CLASS, DEFAULT_ROWS } from './TextArea';

describe('TextArea', () => {

  const checkSetup = (container: any, testId: string) => {
    const textArea = screen.getByTestId(testId);
    expect(textArea).toHaveClass(DEFAULT_CLASS);
    return textArea;
  };

  it('should render a textarea with an id and name', () => {
    const textAreaId = 'text-area';
    const textAreaFieldId = 'textAreaFieldId';

    const { container } = render (
      <TextArea data-testid={textAreaId} id={textAreaId} fieldId={textAreaFieldId} />
    );
    const textArea = checkSetup(container, textAreaId);
    expect((textArea as HTMLInputElement).name).toBe(textAreaFieldId);
    expect((textArea as HTMLInputElement).id).toBe(textAreaId);
    expect((textArea as HTMLInputElement).value).toBe('');
    expect((textArea as HTMLInputElement).disabled).toBe(false);
    expect((textArea as HTMLInputElement).getAttribute('rows')).toEqual(`${DEFAULT_ROWS}`);
  });

  it('should render a text area with a custom number of rows', () => {
    const textAreaId = 'text-area';
    const textAreaFieldId = 'textAreaFieldId';
    const rows = 10;

    const { container } = render (
      <TextArea data-testid={textAreaId} id={textAreaId} fieldId={textAreaFieldId} rows={rows} />
    );
    const textArea = checkSetup(container, textAreaId);
    expect((textArea as HTMLInputElement).getAttribute('rows')).toEqual(`${rows}`);
  });

  it('should render a disabled text area', () => {
    const textAreaId = 'text-area';
    const textAreaFieldId = 'textAreaFieldId';

    const { container } = render (
      <TextArea data-testid={textAreaId} id={textAreaId} fieldId={textAreaFieldId} disabled={true} />
    );
    const textArea = checkSetup(container, textAreaId);
    expect((textArea as HTMLInputElement).disabled).toBe(true);
  });

  it('should render a text area with an error', () => {
    const textAreaId = 'text-area';
    const textAreaFieldId = 'textAreaFieldId';
    const error = 'Error message';

    const { container } = render (
      <TextArea data-testid={textAreaId} id={textAreaId} fieldId={textAreaFieldId} error={error} />
    );
    const textArea = checkSetup(container, textAreaId);
    expect(textArea).toHaveClass(`${DEFAULT_CLASS}--error`);
  });
});
