import { getByTestId, render, screen } from '@testing-library/react';

import Group, { DEFAULT_CLASS } from './Group';
import exp from 'constants';

describe('Group', () =>{
  
  const checkSetup = (container: HTMLElement, testId: string) => {
    const group = screen.getByTestId(testId);
    expect(group.classList).toContain(DEFAULT_CLASS);
    expect(group.tagName).toEqual('DIV');
    return group;
  };

  it('should set up the necessary components for a basic Group', () => {
    const options = {
      id: 'fieldId',
      label: 'Field Label',
    };
    const childId = 'childId';
    const { container } = render (
      <Group data-testid={options.id} {...options}>
        <input data-testid={childId} type='text' />
      </Group>
    );
    const group = checkSetup(container, options.id);
    expect(group.classList).not.toContain(`${DEFAULT_CLASS}--error`);
    const input = screen.getByTestId(childId);
    expect((input as HTMLInputElement).type).toEqual('text');
    const label = group.childNodes[0];
    expect((label as HTMLLabelElement).innerHTML).toEqual(options.label);
    expect((group as HTMLElement).childNodes.length).toEqual(2);
  });

  it('should set up the necessary components for a Group with a fieldset', () => {
    const options = {
      id: 'fieldId',
      label: 'Field Label',
      fieldset: true,
    };
    const childId = 'childId';
    const { container } = render (
      <Group data-testid={options.id} {...options}>
        <input data-testid={childId} type='text' />
      </Group>
    );
    const group = checkSetup(container, options.id);
    expect(group.classList).not.toContain(`${DEFAULT_CLASS}--error`);
    expect((group.childNodes[0] as Element).tagName).toEqual('FIELDSET');
    const input = screen.getByTestId(childId);
    expect((input as HTMLInputElement).type).toEqual('text');
    const label = group.childNodes[0].childNodes[0];
    expect((label as HTMLLabelElement).textContent).toEqual(options.label);
    expect((group as HTMLElement).childNodes.length).toEqual(1);
  });

  it('should include a hint when passsed one', () => {
    const options = {
      id: 'fieldId',
      label: 'Field Label',
      hint: 'This is a hint',
    };
    const childId = 'childId';
    const { container } = render (
      <Group data-testid={options.id} {...options}>
        <input data-testid={childId} type='text' />
      </Group>
    );
    const group = checkSetup(container, options.id);
    expect(group.classList).not.toContain(`${DEFAULT_CLASS}--error`);
    const input = screen.getByTestId(childId);
    expect((input as HTMLInputElement).type).toEqual('text');
    const label = group.childNodes[0];
    expect((label as HTMLLabelElement).innerHTML).toEqual(options.label);
    const hint = group.childNodes[1];
    expect((hint as HTMLParagraphElement).innerHTML).toEqual(options.hint);
    expect((group as HTMLElement).childNodes.length).toEqual(3);
  });

});
