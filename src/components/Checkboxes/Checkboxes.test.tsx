import { render, screen } from '@testing-library/react';

import Checkboxes, { CheckboxesProps } from './Checkboxes';
import { CheckboxOption } from './Checkbox';

describe('Checkboxes', () => {

  const ON_CHANGE_CALLS: any = [];
  const ON_CHANGE = (value: any) => {
    ON_CHANGE_CALLS.length = 0;
    ON_CHANGE_CALLS.push(value);
    return {};
  }


  let props: CheckboxesProps = {
    id: 'checkboxes-example',
    name: 'options',
    label: 'Checkboxes label',
    options: [
      {
        key: 'option1',
        id: 'option1',
        value: 'value1',
        label: 'Option 1',
      },
      {
        key: 'option2',
        id: 'option2',
        value: 'value2',
        label: 'Option 2',
      },
      {
        key: 'option3',
        id: 'option3',
        value: 'value3',
        label: 'Option 3',
      },
      {
        key: 'option4',
        id: 'option4',
        value: 'value4',
        label: 'Option 4',
      }
    ],
  };

  const checkSetup = (container: HTMLElement, props: CheckboxesProps) => {
    const { id, label } = props;
    const checkboxesContainer = container.childNodes[0];
    expect(checkboxesContainer).toBeInTheDocument();
    expect(checkboxesContainer).toHaveClass('checkboxes-container');
    expect(checkboxesContainer.childNodes[0]).toHaveAttribute('id', id);
    expect(screen.getByText(label)).toBeInTheDocument();
  };

  const checkOptions = (checkboxes: CheckboxesProps) => {
    let inputs = screen.getAllByRole('checkbox');
    inputs.forEach(input => {
      checkInputElement(input);
    });
    checkboxes.options.forEach((option, index: number) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
      option.disabled && expect(inputs[index]).toBeDisabled();
    });
  };

  const checkInputElement = (option: HTMLElement) => {
    expect(option).toBeInTheDocument();
    expect(option).toHaveClass('checkbox-item-input');
    expect(option).toHaveAttribute('type', 'checkbox');
    expect(option).toHaveAttribute('id', option.id);
    };

  it('renders a checkbox group with a label and options', () => {
    const { container } = render(<Checkboxes {...props}/>);
    checkSetup(container, props);
    checkOptions(props);
  });

  it('renders a checkbox group with a label, options, and a disabled option', () => {
    const disabledOption: CheckboxOption = {
      key: 'option5',
      id: 'option5',
      value: 'value5',
      label: 'Option 5',
      disabled: true,
    };
    props.options.push(disabledOption);
    const { container } = render(<Checkboxes {...props}/>);
    checkSetup(container, props);
    checkOptions(props);
  });

  it('updates the value when a checkbox is checked and then unchecked', () => {
    render(<Checkboxes {...props} onChange={ON_CHANGE}/>);
    const inputs = screen.getAllByRole('checkbox');
    inputs[0].click();
    expect(inputs[0]).toBeChecked();
    inputs[1].click();
    expect(inputs[1]).toBeChecked();
    inputs[0].click();
    expect(ON_CHANGE_CALLS).toEqual([["value2"]]);
  });
  
});
