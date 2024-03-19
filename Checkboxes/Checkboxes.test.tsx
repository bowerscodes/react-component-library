import { fireEvent, render, screen } from '@testing-library/react';

import Checkboxes, { DEFAULT_CLASS } from './Checkboxes';
import { DEFAULT_CLASS as CHECKBOX_CLASS } from './Checkbox';

describe('Checkboxes', () => {

  const options = [
    { key: 'north', id: 'north', value: 'north', label: 'North' },
    { key: 'south', id: 'south', value: 'south', label: 'South' },
    { key: 'east', id: 'east', value: 'east', label: 'East' },
    { key: 'west', id: 'west', value: 'west', label: 'West' },
  ];

  const ON_CHANGE_CALLS: any = [];
  const ON_CHANGE = (value: any) => {
    ON_CHANGE_CALLS.length = 0;
    ON_CHANGE_CALLS.push(value);
  };

  const checkSetup = (container: HTMLElement, testId: string) => {
    const wrapper = screen.getByTestId(testId);
    expect(wrapper.classList).toContain(DEFAULT_CLASS);
    return wrapper;
  };

  beforeEach(() => {
    ON_CHANGE_CALLS.length = 0;
  });

  it('should set up the necessary components', async () => {
    const id = 'checkboxes';
    const fieldId = 'checkboxesFieldId';
    const { container } = render(
      <Checkboxes
        data-testid={id}
        id={id}
        fieldId={fieldId}
        options={options}
      />
    );
    const wrapper = checkSetup(container, id);
    expect(wrapper.childNodes.length).toEqual(options.length);

    options.forEach((option, index) => {
      const item = wrapper.childNodes[index];
      expect(item).toHaveClass(`${CHECKBOX_CLASS}__item`);
      expect((item as HTMLElement).innerHTML).toContain(option.label);
      const input = item.childNodes[0].childNodes[0].childNodes[0];
      expect((input as HTMLInputElement).tagName).toEqual('INPUT');
      expect((input as HTMLInputElement).id).toEqual(`${id}-${index}`);
      expect((input as HTMLInputElement).name).toEqual(fieldId);
      expect((input as HTMLInputElement).value).toEqual(option.value);
      expect((input as HTMLInputElement).checked).toEqual(false);
    });
  });

  it('should trigger onChange with selected values', async () => {
    const id = 'checkboxes';
    const fieldId = 'checkboxesFieldId';
    const { container } = render(
      <Checkboxes
        data-testid={id}
        id={id}
        fieldId={fieldId}
        options={options}
        onChange={ON_CHANGE}
      />
    );
    const wrapper = checkSetup(container, id);
    const inputs = wrapper.childNodes;

    fireEvent.click(inputs[0].childNodes[0].childNodes[0]);
    expect(ON_CHANGE_CALLS.length).toEqual(1);
    expect(ON_CHANGE_CALLS[0]).toMatchObject({
      target: {
        name: fieldId,
        value: [options[0].value],
      },
    });

    fireEvent.click(inputs[1].childNodes[0].childNodes[0]);
    expect(ON_CHANGE_CALLS.length).toEqual(1);
    expect(ON_CHANGE_CALLS[0]).toMatchObject({
      target: {
        name: fieldId,
        value: [options[0].value, options[1].value],
      },
    });

    fireEvent.click(inputs[0].childNodes[0].childNodes[0]);
    expect(ON_CHANGE_CALLS.length).toEqual(1);
    expect(ON_CHANGE_CALLS[0]).toMatchObject({
      target: {
        name: fieldId,
        value: [options[1].value],
      },
    });
  });
  
});
