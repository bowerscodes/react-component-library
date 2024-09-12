import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('Error', () => {

  const checkSetup = (container: any, testId: string) => {
    const error = screen.getByTestId(testId);
    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('error-message');
    expect((error as HTMLElement).childNodes[0].textContent).toEqual('Error: ');
    return error;
  };

  it('should render an Error with the appropriate text', () => {
    const errorMessageId = 'error';
    const errorMessageText = 'There is an error';
    const { container } = render(
      <ErrorMessage data-testid={errorMessageId}>{errorMessageText}</ErrorMessage>
    );

    const error = checkSetup(container, errorMessageId);
    const secondChild = error.childNodes[1];
    expect(secondChild.textContent).toEqual(errorMessageText);
  });

  it('should render the appropriate markup in the Error', () => {
    const errorMessageId = 'markup';
    const innerDivId = 'inner-div';
    const innerDivText = 'Inner div text';
    const errorMessageMarkup = (
      <div data-testid={innerDivId}>{innerDivText}</div>
    );
    const { container } = render(
      <ErrorMessage data-testid={errorMessageId}>{errorMessageMarkup}</ErrorMessage>
    );
    const error = checkSetup(container, errorMessageId);
    const innerDiv = screen.getByTestId(innerDivId);
    expect(innerDiv.textContent).toEqual(innerDivText);
  });
});
