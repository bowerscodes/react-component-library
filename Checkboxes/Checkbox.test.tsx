import { cleanup, render, screen } from '@testing-library/react';

import Checkbox, { CheckboxProps, DEFAULT_CLASS } from './Checkbox';
import TextInput from '../TextInput';

afterEach(cleanup);

describe('Checkbox', () => {

  const checkSetup = (container: HTMLElement, testId: string) => {
    const wrapper = screen.getByTestId(testId);
    expect((wrapper as HTMLElement).classList).toContain(`${DEFAULT_CLASS}__container`);
    
    const label = wrapper.childNodes[0];
    const innerLabel = label.childNodes[2]
    const input = wrapper.childNodes[0].childNodes[0];
    const hint = label.childNodes[2].childNodes[1];
    return { wrapper, input, label, innerLabel, hint };
  };

  it('should set up the necessary components', () => {
    const id = 'checkbox';
    const fieldId = 'checkboxFieldId';
    const option = {
      key: 'checkboxKey', id: 'checkboxId', value: 'checkboxOption', label: 'Checkbox Option'
    };
    const { container } = render (
      <Checkbox data-testid={id} id={id} name={fieldId} option={option} />
    );
    // expect(container.childNodes[0].childNodes[0].childNodes[0]).toEqual('')
    const { input, label, innerLabel, hint } = checkSetup(container, id);

    expect((input as HTMLInputElement).tagName).toEqual('INPUT');
    expect((input as HTMLInputElement).type).toEqual('checkbox');
    expect((input as HTMLInputElement).id).toEqual(id);
    expect((input as HTMLInputElement).name).toEqual(fieldId);
    expect((input as HTMLInputElement).value).toEqual(option.value);
    expect((input as HTMLInputElement).classList).toContain(`${DEFAULT_CLASS}__input`);
    expect((input as HTMLInputElement).getAttribute('disabled')).toBeNull();

    expect((label as HTMLLabelElement).classList).toContain(`${DEFAULT_CLASS}__label`);
    expect((innerLabel as HTMLLabelElement).classList).toContain(`${DEFAULT_CLASS}__item--label`);
    expect((innerLabel as HTMLLabelElement).innerHTML).toEqual(option.label);
    expect((label as HTMLLabelElement).getAttribute('for')).toEqual(id);
    expect((label as HTMLLabelElement).getAttribute('disabled')).toBeNull();

    expect(hint).toBeUndefined();
  });

  it('should set up the necessary components with a hint', async () => {
    const id = 'checkbox';
    const fieldId = 'checkboxFieldId';
    const option = {
      key: 'checkboxKey', id: 'checkboxId', value: 'checkboxOption', label: 'Checkbox Option', hint: 'This is a checkbox option'
    };
    const { container } = render (
      <Checkbox data-testid={id} id={id} name={fieldId} option={option} />
    );
    const { input, label, innerLabel, hint } = checkSetup(container, id);
    
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    expect(innerLabel).toBeDefined();
    expect(hint).toBeDefined();
  });

  it('should be checked when checked is true', async () => {
    const id = 'checkbox';
    const fieldId = 'checkboxFieldId';
    const option = {
      key: 'checkboxKey', id: 'checkboxId', value: 'checkboxOption', label: 'Checkbox Option'
    };
    const { container } = render (
      <Checkbox data-testid={id} id={id} name={fieldId} option={option} checked />
    );
    const { input } = checkSetup(container, id);
    expect((input as HTMLInputElement).checked).toEqual(true);
  });

  it('should toggle between checked & unchecked when checked changes value', () => {
    const id = 'checkbox';
    const fieldId = 'checkboxFieldId';
    const option = {
      key: 'checkboxKey', id: 'checkboxId', value: 'checkboxOption', label: 'Checkbox Option'
    };
    const { container, rerender } = render (
      <Checkbox data-testid={id} id={id} name={fieldId} option={option} />
    );
    const { input } = checkSetup(container, id);
    expect((input as HTMLInputElement).checked).toEqual(false);
    rerender(<Checkbox data-testid={id} id={id} name={fieldId} option={option} checked />);
    expect((input as HTMLInputElement).checked).toEqual(true);
    rerender(<Checkbox data-testid={id} id={id} name={fieldId} option={option} checked={false} />);
    expect((input as HTMLInputElement).checked).toEqual(false);
  });

  it('should show a nested component when necessary', () => {
    const id = 'checkbox';
    const fieldId = 'checkboxFieldId';
    const option = {
      key: 'checkboxKey', 
      id: 'checkboxId', 
      value: 'checkboxOption', 
      label: 'Checkbox Option', 
      nested: [{
        id: 'nested', 
        fieldId: 'nestedFieldId', 
        label: 'This is a checkbox option',
        type: 'textInput'
      }],
      children: <TextInput id='nested' fieldId='nestedFieldId' />
    };
    const { container } = render (
      <Checkbox data-testid={id} id={id} name={fieldId} option={option} checked />
    );
    const { innerLabel } = checkSetup(container, id);
    const nestedElement = innerLabel.childNodes[1];
    expect(nestedElement).toBeDefined();
    expect((nestedElement as HTMLElement).classList).toContain('checkbox__conditional');
    expect((nestedElement as HTMLElement).tagName).toEqual('DIV');
  });

});
