import { fireEvent, render, screen } from '@testing-library/react';

import Radios from './Radios';

describe('Radios', () => {

  const DEFAULT_CLASS = 'radios';

  const options = [
    {
      value: 'value1',
      label: 'Option 1',
    },
    {
      value: 'value2',
      label: 'Option 2',
    },
    {
      value: 'value3',
      label: 'Option 3',
    },
  ];

  const checkSetup = (container: any, testId: string) => {
    const wrapper = screen.getByTestId(testId);
    expect(wrapper.classList).toContain(DEFAULT_CLASS);
    return wrapper;
  };

  const checkValueChange = (id: string, fieldId: string, rerender: any, value: any, wrapper: any) => {
    const checkedValue = typeof value === 'object' ? value?.value : value;
    rerender(
      <Radios data-testid={id} id={id} fieldId={fieldId} options={options} value={value} />
    );
    options.forEach((option, index) => {
      const prevSelected = options[index > 0 ? index - 1 : index].value === value?.value;
      if (!prevSelected) {
        const input = wrapper.childNodes[index].childNodes[0];
        expect(input.checked).toEqual(option.value === checkedValue);
      };
    });
  };

  it('renders a Radios component with the correct id and name', () => {
    const id = 'radios';
    const { container } = render(
      <Radios
        data-testid={id}
        id={id}
        fieldId={id}
        options={options}
      />
    );
    checkSetup(container, id);
  });

  it('should set up the necessary components', async () => {
    const id = 'radios';
    const fieldId = 'radiosFieldId';
    const { container } = render(
      <Radios 
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
      expect((item as Element).classList).toContain(`${DEFAULT_CLASS}__item`);
      expect((item as Element).innerHTML).toContain(option.label);
      const input = item.childNodes[0];
      expect((input as HTMLInputElement).id).toEqual(`${id}-${index}`);
      expect((input as HTMLInputElement).name).toEqual(fieldId);
      expect((input as HTMLInputElement).value).toEqual(option.value);
      expect((input as HTMLInputElement).checked).toEqual(false);
    });
  });

  it('should appropriately handle a change to the value', async () => {
    const id = 'radios';
    const fieldId = 'radiosFieldId';
    const { container, rerender } = render (
      <Radios 
        data-testid={id} 
        id={id} 
        fieldId={fieldId} 
        options={options} 
      />
    );
    const wrapper = checkSetup(container, id);
    options.forEach((option, index) => {
      const input = wrapper.childNodes[index].childNodes[0];
      expect((input as HTMLInputElement).checked).toEqual(false);
    });
    checkValueChange(id, fieldId, rerender, options[2], wrapper);
    checkValueChange(id, fieldId, rerender, options[0], wrapper);
    checkValueChange(id, fieldId, rerender, options[1], wrapper);
    checkValueChange(id, fieldId, rerender, null, wrapper);
  });

  it('should handle clicking on an option', async () => {
    const id = 'radios';
    const fieldId = 'fieldid';
    const changeEvents: React.ChangeEvent<HTMLInputElement>[] = [];
    const onChange = (event: any) => {
      changeEvents.push(event.target.value);
    };
    const { container } = render (
      <Radios 
        data-testid={id} 
        id={id} 
        fieldId={fieldId} 
        options={options} 
        onChange={onChange} 
      />
    );
    const wrapper = checkSetup(container, id);
    const input = wrapper.childNodes[2].childNodes[0];
    expect(changeEvents.length).toEqual(0);
    fireEvent.click(input);
    expect(changeEvents.length).toEqual(1);
    expect(changeEvents[0]).toEqual(options[2].value);
  });

});
