import { render } from '@testing-library/react';

import Radios, { Option } from './Radios';

describe('Radios', () => {

  const OPTIONS = [
    {
      id: 'option1',
      value: 'value1',
      label: 'Option 1',
    },
    {
      id: 'option2',
      value: 'value2',
      label: 'Option 2',
    },
  ];

  const getRadios = (container: any) => {
    let containerContents = [];
    containerContents.push(container.childNodes[0].childNodes[0].childNodes.forEach((node: any) => {
      containerContents.push(node);
    }));
    const radios = containerContents.slice(1, -1)
    return radios;
  };

  const checkSetup = (container: any, options: Option[]) => {
    const radios = getRadios(container);
    radios.forEach(
      (radio) => {
        expect(radio).toHaveClass('radios-label');
        expect(radio.childNodes[0]).toHaveAttribute('type', 'radio');
        expect(radio.childNodes[0].classList).toContain('radios-input');
      }
    )
  };

  const checkOptions = (container: any, testId: any, options: Option[]) => {
    const radios = getRadios(container);
    options.forEach((option, index) => {
      const input = radios[index].childNodes[0];
      const label = radios[index];
      expect(input).toHaveAttribute('value', option.value);
      expect(label).toHaveTextContent(option.label);
    });
  };

  it('renders a Radios component with the correct id and name', () => {
    const label = 'Radios Label';
    const id = 'radios';
    const { container } = render(
      <Radios
        data-testid={id}
        id={id}
        label={label}
        options={OPTIONS}
      />
    );
    checkSetup(container, OPTIONS);
  });

  it('renders a Radios component with the correct options', () => {
    const label = 'Radios Label';
    const id = 'radios';
    const { container } = render(
      <Radios
        data-testid={id}
        id={id}
        label={label}
        options={OPTIONS}
      />
    );
    checkOptions(container, id, OPTIONS);
  });

});
