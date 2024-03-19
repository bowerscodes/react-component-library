import { fireEvent, render, screen } from '@testing-library/react';
import Select, { DEFAULT_CLASS, DEFAULT_PLACEHOLDER } from './Select';

describe('Select', () => {
  
  const checkSetup = (container: any, testId: any) => {
    const select = screen.getByTestId(testId);
    expect(select.classList).toContain(DEFAULT_CLASS);
    return select;
  };

  it('renders a select with id and class attributes set', () => {
    const selectId = 'selectId';
    const options = [
      {
        label: 'Option 1',
        value: 'option1'
      },
      {
        label: 'Option 2',
        value: 'option2'
      }
    ];

    const { container } = render(
      <Select 
        id={selectId} 
        fieldId={selectId} 
        data-testid={selectId} 
        options={options} 
      />
    );

    const select = checkSetup(container, selectId) as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(select.tagName).toEqual('SELECT');
    expect(select.id).toEqual(selectId);
    expect(select.value).toEqual('');
    expect(select.getAttribute('disabled')).toBeNull();
  });

  it('should render with a default placeholder', () => {
    const selectId = 'selectId';
    const selectFieldId = 'selectFieldId';
    const options = [
      {
        label: 'Option 1',
        value: 'option1'
      },
      {
        label: 'Option 2',
        value: 'option2'
      }
    ];

    const { container } = render(
      <Select 
        id={selectId} 
        fieldId={selectFieldId} 
        data-testid={selectId} 
        options={options} 
      />
    );

    const select = checkSetup(container, selectId) as HTMLSelectElement;
    const selectedOption = select.childNodes[select.selectedIndex] as HTMLOptionElement;
    expect(select.value).toEqual('');
    expect(selectedOption.innerHTML).toEqual(DEFAULT_PLACEHOLDER);
  });

  it('should render with a custom placeholder', () => {
    const selectId = 'selectId';
    const selectFieldId = 'selectFieldId';
    const placeholder = 'Choose an option';
    const options = [
      {
        label: 'Option 1',
        value: 'option1'
      },
      {
        label: 'Option 2',
        value: 'option2'
      }
    ];

    const { container } = render(
      <Select 
        id={selectId} 
        fieldId={selectFieldId} 
        data-testid={selectId} 
        options={options} 
        placeholder={placeholder}
      />
    );

    const select = checkSetup(container, selectId) as HTMLSelectElement;
    const selectedOption = select.childNodes[select.selectedIndex] as HTMLOptionElement;
    expect(select.value).toEqual('');
    expect(selectedOption.innerHTML).toEqual(placeholder);
  });

  it('should render with a default option selected', () => {
    const selectId = 'selectId';
    const selectFieldId = 'selectFieldId';
    const defaultOption = 'Option 3';
    const defaultValue = 'option3';
    const options = [
      {
        label: 'Option 1',
        value: 'option1'
      },
      {
        label: 'Option 2',
        value: 'option2'
      },
      {
        label: defaultOption,
        value: defaultValue
      }
    ];

    const { container } = render(
      <Select 
        id={selectId} 
        fieldId={selectFieldId} 
        data-testid={selectId} 
        options={options} 
        defaultValue={defaultValue}
      />
    );

    const select = checkSetup(container, selectId) as HTMLSelectElement;
    const selectedOption = select.childNodes[select.selectedIndex] as HTMLOptionElement;
    expect(select.value).toEqual(defaultValue);
    expect(selectedOption.innerHTML).toEqual(defaultOption);
  });

  it('should set the value of the select when an option is selected', () => {
    const selectId = 'selectId';
    const selectFieldId = 'selectFieldId';
    const label = 'Option 2';
    const value = 'option2';
    const options = [
      {
        label: 'Option 1',
        value: 'option1'
      },
      {
        label: label,
        value: value
      }
    ];

    let onChangeCalls = 0;

    const onChange = () => {
      onChangeCalls++;
    };

    const { container } = render(
      <Select 
        id={selectId} 
        fieldId={selectFieldId} 
        data-testid={selectId}
        value={value}
        onChange={onChange}
        options={options} 
      />
    );

    const select = checkSetup(container, selectId) as HTMLSelectElement;
    const selectedOption = select.childNodes[select.selectedIndex] as HTMLOptionElement;
    expect(select.value).toEqual(value);
    expect(onChangeCalls).toEqual(0);
    expect(selectedOption.innerHTML).toEqual(label);

    const event = { target: { name: selectFieldId, value: value } };
    fireEvent.change(select, event);
    expect(onChangeCalls).toEqual(1);
  });
});