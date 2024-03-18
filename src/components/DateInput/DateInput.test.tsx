import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import DateInput, { DEFAULT_CLASS } from './DateInput';
import { DEFAULT_CLASS as DEFAULT_LABEL_CLASS } from '../Label/Label'

describe('DateInput', () => {

  const checkSetup = (container: any, testId: string) => {
    const wrapper = screen.getByTestId(testId);
    return wrapper;
  };

  it('renders a date input', () => {
    const id = 'date-input';
    const fieldId = 'date-input-fieldId';
    render(<DateInput data-testid={id} id={id} fieldId={fieldId} />);
    const dateInput = checkSetup(screen, id);
    expect(dateInput).toBeInTheDocument();
  });

  it('should appropriately set up all the necessary components', () => {
    const id = 'date-input';
    const fieldId = 'date-inpufieldId';
    const { container } = render (
      <DateInput 
        data-testid={id}
        id={id} 
        fieldId={fieldId} 
      />
    );
    const wrapper = checkSetup(container, id);

    expect(wrapper).toHaveClass(DEFAULT_CLASS);
    expect(wrapper.childNodes.length).toBe(3);

    // DAY
    const day = wrapper.childNodes[0];
    expect(day).toHaveClass(DEFAULT_CLASS + '__item');
    
    const dayLabel = day.childNodes[0];
    expect(dayLabel).toHaveClass(DEFAULT_LABEL_CLASS);
    expect(dayLabel.textContent).toBe('Day');

    const dayInput = day.childNodes[1];
    expect(dayInput).toHaveClass(DEFAULT_CLASS + '__input');
    expect((dayInput as HTMLInputElement).id).toEqual(`${id}-day`);
    expect((dayInput as HTMLInputElement).name).toEqual(`${fieldId}-day`);

    // MONTH
    const month = wrapper.childNodes[1];
    expect(month).toHaveClass(DEFAULT_CLASS + '__item');
    
    const monthLabel = month.childNodes[0];
    expect(monthLabel).toHaveClass(DEFAULT_LABEL_CLASS);
    expect(monthLabel.textContent).toBe('Month');

    const monthInput = month.childNodes[1];
    expect(monthInput).toHaveClass(DEFAULT_CLASS + '__input');
    expect((monthInput as HTMLInputElement).id).toEqual(`${id}-month`);
    expect((monthInput as HTMLInputElement).name).toEqual(`${fieldId}-month`);

    // YEAR
    const year = wrapper.childNodes[2];
    expect(year).toHaveClass(DEFAULT_CLASS + '__item');
    
    const yearLabel = year.childNodes[0];
    expect(yearLabel).toHaveClass(DEFAULT_LABEL_CLASS);
    expect(yearLabel.textContent).toBe('Year');

    const yearInput = year.childNodes[1];
    expect(yearInput).toHaveClass(DEFAULT_CLASS + '__input');
    expect((yearInput as HTMLInputElement).id).toEqual(`${id}-year`);
    expect((yearInput as HTMLInputElement).name).toEqual(`${fieldId}-year`);
  });

  it('should accept an error prop and restyle the component accordingly', () => {
    const id = 'date-input';
    const fieldId = 'date-input-fieldId';
    const { container } = render (
      <DateInput 
        data-testid={id}
        id={id} 
        fieldId={fieldId} 
        propsInError={{ day: true, month: true, year: true }}
      />
    );
    const wrapper = checkSetup(container, id);
    expect(wrapper).toHaveClass(DEFAULT_CLASS);

    // DAY
    const day = wrapper.childNodes[0];
    const dayInput = day.childNodes[1];
    expect(dayInput).toHaveClass('input--error');

    // MONTH
    const month = wrapper.childNodes[1];
    const monthInput = month.childNodes[1];
    expect(monthInput).toHaveClass('input--error');

    // YEAR
    const year = wrapper.childNodes[2];
    const yearInput = year.childNodes[1];
    expect(yearInput).toHaveClass('input--error');

  });
});
