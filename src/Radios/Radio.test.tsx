import { render, screen } from '@testing-library/react';

import Radio, { RadioOption, DEFAULT_CLASS } from './Radio';
import TextInput from '../TextInput';

describe('Radio', () => {

  const checkSetup = (container: any, testId: string) => {
    const wrapper = screen.getByTestId(testId);
    expect(wrapper.classList).toContain(`${DEFAULT_CLASS}__item`);
    const input = wrapper.childNodes[0];
    const label = wrapper.childNodes[1];
    const hint = wrapper.childNodes[2];
    return { wrapper, input, label, hint };
  };

  it('should set up the components appropriately', async () => {
    const id = 'radio';
    const fieldId = 'radioFieldId';
    const option: RadioOption = { value: 'apple', label: 'Apple' };
    const { container } = render(
      <Radio data-testid={id} id={id} name={fieldId} option={option} />
    );
    const { input, label, hint } = checkSetup(container, id);

    // Input
    expect((input as HTMLInputElement).tagName).toEqual('INPUT');
    expect((input as HTMLInputElement).type).toEqual('radio');
    expect((input as HTMLInputElement).id).toEqual(id);
    expect((input as HTMLInputElement).name).toEqual(fieldId);
    expect((input as HTMLInputElement).value).toEqual(option.value);
    expect((input as HTMLInputElement).getAttribute('disabled')).toBeNull();

    // Label
    expect((label as HTMLInputElement).classList).toContain(`${DEFAULT_CLASS}__label`);
    expect((label as HTMLInputElement).innerHTML).toEqual(option.label);
    expect((label as HTMLInputElement).getAttribute('for')).toEqual(id);
    expect((label as HTMLInputElement).getAttribute('disabled')).toBeNull();

    // No Hint
    expect(hint).toBeUndefined();
  });

  it('should set up the components appropriately with a hint', async () => {
    const id = 'radio';
    const fieldId = 'radioFieldId';
    const option: RadioOption = { value: 'apple', label: 'Apple', hint: 'This is a fruit' };
    const { container } = render(
      <Radio data-testid={id} id={id} name={fieldId} option={option} />
    );
    const { input, label, hint } = checkSetup(container, id);

    // Input
    expect(input).toBeDefined();

    // Label
    expect(label).toBeDefined();

    // Hint
    expect(hint).toBeDefined();
    expect((hint as Element).classList).toContain(`${DEFAULT_CLASS}__hint`);
    expect((hint as HTMLInputElement).innerHTML).toEqual(option.hint);
    expect((hint as HTMLInputElement).id).toEqual(`${id}-hint`);
  });

  it('should not be checked by default', async () => {
    const id = 'radio';
    const fieldId = 'radioFieldId';
    const option: RadioOption = { value: 'apple', label: 'Apple' };
    const { container } = render(
      <Radio data-testid={id} id={id} name={fieldId} option={option} />
    );
    const { input } = checkSetup(container, id);
    expect((input as HTMLInputElement).checked).toEqual(false);
  });

  it('should be checked when selected is set to true', async () => {
    const id = 'radio';
    const fieldId = 'radioFieldId';
    const option: RadioOption = { value: 'apple', label: 'Apple' };
    const { container } = render(
      <Radio data-testid={id} id={id} name={fieldId} option={option} selected />
      );
      const { input } = checkSetup(container, id);
      expect((input as HTMLInputElement).checked).toEqual(true);
    });

    it('should not be checked when selected is set to false', async () => {
      const id = 'radio';
      const fieldId = 'radioFieldId';
      const option: RadioOption = { value: 'apple', label: 'Apple' };
      const { container } = render(
        <Radio data-testid={id} id={id} name={fieldId} option={option} selected={false} />
      );
      const { input } = checkSetup(container, id);
      expect((input as HTMLInputElement).checked).toEqual(false);
    });

    it('should toggle checked when selected is toggled', async () => {
      const id = 'radio';
      const fieldId = 'radioFieldId';
      const option: RadioOption = { value: 'apple', label: 'Apple' };
      const { container, rerender } = render(
        <Radio data-testid={id} id={id} name={fieldId} option={option} selected={false} />
      );
      const { input } = checkSetup(container, id);
      expect((input as HTMLInputElement).checked).toEqual(false);
      rerender(<Radio data-testid={id} id={id} name={fieldId} option={option} selected />);
      expect((input as HTMLInputElement).checked).toEqual(true);
    });

    it('should disable the input when the option is disabled', async () => {
      const id = 'radio';
      const fieldId = 'radioFieldId';
      const option: RadioOption = { value: 'apple', label: 'Apple', disabled: true };
      const { container } = render(
        <Radio data-testid={id} id={id} name={fieldId} option={option} />
      );
      const { input } = checkSetup(container, id);
      expect((input as HTMLInputElement).disabled).toEqual(true);
    });

    it('should show a nested component when selected', async () => {
      const id = 'radio';
      const fieldId = 'radioFieldId';
      const option: RadioOption = { 
        value: 'apple', 
        label: 'Apple', 
        nested: [
          { 
            id: 'nested',
            fieldId: 'nested',
            label: 'Nested component',
            type: 'textInput'
          }
        ], 
        children: <TextInput id='nestedInput' fieldId='nestedInput' />
      };
      const { container } = render(
        <Radio data-testid={id} id={id} name={fieldId} option={option} selected />
      );
      const nestedElement = container.childNodes[1].childNodes[0];
      expect(nestedElement).toHaveClass('input');
      expect((nestedElement as HTMLInputElement).tagName).toEqual('INPUT');
    });
  });
  