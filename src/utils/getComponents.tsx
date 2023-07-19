import { JSX } from 'react/jsx-runtime';

import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Checkboxes } from '../components/Checkboxes/Checkboxes';
import { Heading } from '../components/Heading/Heading';
import { Hint } from '../components/Hint/Hint';
import { Label } from '../components/Label/Label';
import { Page } from '../components/Page/Page';
import { Radios } from '../components/Radios/Radios';
import { Select } from '../components/Select/Select';
import { TextInput } from '../components/TextInput/TextInput';


type Props = {
  elements: [{
    id: string;
    component: string;
    props: any;
  },];
  onChange: (event: any) => void;
};

let components: (JSX.Element | undefined)[] = [];

const componentBuilder = (id: string, component: string, props: any, onChange: Function) => {

  const componentParams = {
    key: id, 
    name: id,
    onChange: onChange,
    ...props
  }

  if (component === "Button") {
    return <Button {...componentParams}/>
  }
  if (component === "ButtonGroup") {
    return <ButtonGroup {...componentParams}/>
  }
  if (component === "Checkboxes") {
    return <Checkboxes {...componentParams}/>
  }
  if (component === "Heading") {
    return <Heading {...componentParams}/>
  }
  if (component === "Hint") {
    return <Hint {...componentParams}/>
  }
  if (component === "Label") {
    return <Label {...componentParams}/>
  }
  if (component === "Page") {
    return <Page {...componentParams}/>
  }
  if (component === "Radios") {
    return <Radios {...componentParams}/>
  }
  if (component === "Select") {
    return <Select {...componentParams}/>
  }
  if (component === "TextInput") {
    return <TextInput {...componentParams}/>
  }
};
  


export const getComponents = ({ elements, onChange } : Props) => {

  let componentsArray: Array<any> = [];

  elements.map(element => {
    return componentsArray.push(element)
  });

  componentsArray.forEach(component => {
    return components.push(
      componentBuilder(
        component.id, 
        component.component, 
        component.props, 
        onChange
      )
    );
  });

  return components;
};
