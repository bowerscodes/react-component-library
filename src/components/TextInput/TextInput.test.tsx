import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput, { DEFAULT_CLASS } from './TextInput';

describe('TextInput', () => {
  
  const checkSetup = (container: any, testId: any, attributes: any) => {
    const input = screen.getByTestId(testId);
    expect(input).toHaveClass(DEFAULT_CLASS);
    expect(input).toHaveAttribute('type', attributes.type);
    expect(input).toHaveAttribute('name', attributes.name);
    expect(input).toHaveAttribute('id', attributes.id);
    return input;
  };

  const checkSize = (container: any, testId: any, size?: string) => {
    const input = screen.getByTestId(testId);
    size ? expect(input).toHaveClass(`${DEFAULT_CLASS}--${size}`) : expect(input).toHaveClass(`${DEFAULT_CLASS}--m`) ;
    return input;
  };

  const INPUT_ID = 'input';
  const INPUT_FIELD_ID = 'inputFieldId';
  const INPUT_FIELD_ATTRIBUTES = { type: 'text', name: INPUT_FIELD_ID, id: INPUT_FIELD_ID };

  describe('TextInput component should render with the correct paramters', () => {

    it('renders an input with the correct id and name, defaulted to medium size when no size is specified', () => {
      const label = 'Text Input';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid = {INPUT_ID}
          textInputLabel={label}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID);
    });
  
    it('renders a small input', () => {
      const label = 'Small';
      const width = 's';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid={INPUT_ID}
          textInputLabel={label}
          width={width}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID, width);
    });
  
    it('renders a large input', () => {
      const label = 'Large';
      const width = 'l';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid={INPUT_ID}
          textInputLabel={label}
          width={width}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID, width);
    });
    
    it('renders an extra large input', () => {
      const label = 'Extra Large';
      const width = 'xl';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid={INPUT_ID}
          textInputLabel={label}
          width={width}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID, width);
    });
  
    it('renders a one-half input', () => {
      const label = 'One Half';
      const width = 'one-half';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid={INPUT_ID}
          textInputLabel={label}
          width={width}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID, width);
    });
    
    it('renders a one-third input', () => {
      const label = 'One Third';
      const width = 'one-third';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid={INPUT_ID}
          textInputLabel={label}
          width={width}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID, width);
    });
  
    it('renders a two-thirds input', () => {
      const label = 'Two Thirds';
      const width = 'two-thirds';
      const { container } = render (
        <TextInput 
          id={INPUT_FIELD_ID}
          data-testid={INPUT_ID}
          textInputLabel={label}
          width={width}
        />
      );
  
      checkSetup(container, INPUT_ID, INPUT_FIELD_ATTRIBUTES);
      checkSize(container, INPUT_ID, width);
    });
  });

});