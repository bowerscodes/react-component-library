import { render, screen } from '@testing-library/react';
import Error from './Error';

describe('Error', () => {

  const checkSetup = (container: any, testId: string) => {
    const error = screen.getByTestId(testId);
    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('error');
    expect((error as HTMLElement).childNodes[0].textContent).toEqual('Error: ');
    return error;
  };

  it('should render an Error with the appropriate text', () => {
    const errorMessageId = 'error';
    const errorMessageText = 'There is an error';
    const { container } = render(
      <Error data-testid={errorMessageId}>{errorMessageText}</Error>
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
      <Error data-testid={errorMessageId}>{errorMessageMarkup}</Error>
    );
    const error = checkSetup(container, errorMessageId);
    const innerDiv = screen.getByTestId(innerDivId);
    expect(innerDiv.textContent).toEqual(innerDivText);
  });
});
