import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Rating, { DEFAULT_CLASS } from './Rating';

describe('Rating', () => {

  afterEach(cleanup);

  const checkSetup = (container: any, fieldId: string, classBlock = DEFAULT_CLASS) => {
    const rating = screen.getByTestId(fieldId);
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveClass(classBlock);
    return rating;
  };

  const checkRatingElements = (container: any, fieldId: string, rateOutOf: number = 10, classBlock = DEFAULT_CLASS) => {
    const ratingElements = screen.queryAllByTestId(new RegExp(`${fieldId}--\\d`));
    expect(ratingElements).toHaveLength(rateOutOf);

      for (let i = 1; i <= rateOutOf; i++) {
      const id = `${fieldId}--${i}`;
      const ratingElement = screen.getByTestId(id);
      expect(ratingElement).toBeInTheDocument();
      expect(ratingElement).toHaveClass(`${classBlock}__input`);
      expect(ratingElement).toHaveAttribute('id', id);
      
      fireEvent.click(ratingElement);
      expect((ratingElement as HTMLInputElement).checked).toBe(true);
    }
  };

  it('renders a rating component with the default number of inputs (10)', () => {
    const fieldId = 'test';

    const { container } = render(<Rating fieldId={fieldId} />);

    checkSetup(container, fieldId);
    checkRatingElements(container, fieldId);
  });

  it('renders a rating component with a custom number of inputs', () => {
    const fieldId = 'test';
    const rateOutOf = 5;

    const { container } = render(<Rating fieldId={fieldId} rateOutOf={rateOutOf} />);

    checkSetup(container, fieldId);
    checkRatingElements(container, fieldId, rateOutOf);
  });

  it('renders a rating component with custom lowerBoundText, medianText and upperBoundText values', () => {
    const fieldId = 'test';
    const lowerBoundText = 'Poor';
    const medianText = 'Average';
    const upperBoundText = 'Excellent';

    const { container } = render(
      <Rating 
        fieldId={fieldId} 
        lowerBoundText={lowerBoundText} 
        medianText={medianText} 
        upperBoundText={upperBoundText} 
      />
    );

    checkSetup(container, fieldId);

    expect(screen.getByText(lowerBoundText)).toBeInTheDocument();
    expect(screen.getByText(medianText)).toBeInTheDocument();
    expect(screen.getByText(upperBoundText)).toBeInTheDocument();
  });

  it('does not render medianText if rateOutOf is less than 8', () => {
    const fieldId = 'test';
    const rateOutOf = 7;
    const medianText = 'Average';

    const { container } = render(
      <Rating 
        fieldId={fieldId} 
        rateOutOf={rateOutOf} 
        medianText={medianText} 
      />
    );

    checkSetup(container, fieldId);

    expect(screen.queryByText(medianText)).not.toBeInTheDocument();
  });
  
});
