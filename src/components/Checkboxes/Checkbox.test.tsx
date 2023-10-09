import { render, screen } from '@testing-library/react';
import { Checkbox, CheckboxProps } from './Checkbox';

const props: CheckboxProps = {
  id: 'checkbox-example',
  name: 'option1',
  option: {
    key: 'option1',
    id: 'option1',
    value: 'value',
    label: 'Option label',
  },
};

const checkSetup = (props: CheckboxProps) => {
  const { id, name, option } = props;
  const checkboxInput = screen.getByRole('checkbox');
  expect(checkboxInput).toBeInTheDocument();
  expect(checkboxInput).toHaveClass('checkbox-item-input');
  expect(checkboxInput).toHaveAttribute('id', id);
  expect(checkboxInput).toHaveAttribute('name', name);
  expect(checkboxInput).toHaveAttribute('value', option.value);
  expect(screen.getByText(option.label)).toBeInTheDocument();
};

describe('Checkbox', () => {
  it('renders a checkbox', () => {
    render(<Checkbox {...props}/>);
    checkSetup(props);
  });

  it('renders a checked checkbox', () => {
    render(<Checkbox {...props} checked={true}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders a disabled checkbox', () => {
    render(<Checkbox {...props} disabled={true}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('renders a checked and disabled checkbox', () => {
    render(<Checkbox {...props} checked={true} disabled={true}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('renders a checkbox with a custom onChange handler', () => {
    const onChange = jest.fn();
    render(<Checkbox {...props} onChange={onChange}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    screen.getByRole('checkbox').click();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders a checkbox with a custom onChange handler that is checked', () => {
    const onChange = jest.fn();
    render(<Checkbox {...props} checked={true} onChange={onChange}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).toBeChecked();
    screen.getByRole('checkbox').click();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('renders a checkbox with a custom onChange handler that is disabled', () => {
    const onChange = jest.fn();
    render(<Checkbox {...props} disabled={true} onChange={onChange}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).toBeDisabled();
    screen.getByRole('checkbox').click();
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('renders a checkbox with a custom onChange handler that is checked and disabled', () => {
    const onChange = jest.fn();
    render(<Checkbox {...props} checked={true} disabled={true} onChange={onChange}/>);
    checkSetup(props);
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByRole('checkbox')).toBeDisabled();
    screen.getByRole('checkbox').click();
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

});