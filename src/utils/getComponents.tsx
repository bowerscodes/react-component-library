import { JSX } from 'react/jsx-runtime';

import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Checkboxes } from '../components/Checkboxes/Checkboxes';
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
};

let components: (JSX.Element | undefined)[] = [];

const componentBuilder = (component: string, props: any) => {
  if (component === "Button") {
    return <Button {...props}/>
  }
  if (component === "ButtonGroup") {
    return <ButtonGroup {...props}/>
  }
  if (component === "Chckboxes") {
    return <Checkboxes {...props}/>
  }
  if (component === "Hint") {
    return <Hint {...props}/>
  }
  if (component === "Label") {
    return <Label {...props}/>
  }
  if (component === "Page") {
    return <Page {...props}/>
  }
  if (component === "Radios") {
    return <Radios {...props}/>
  }
  if (component === "Select") {
    return <Select {...props}/>
  }
  if (component === "TextInput") {
    return <TextInput {...props}/>
  }
};
  


export const getComponents = ({ elements }: Props) => {

  let componentsArray: Array<any> = [];

  elements.map(element => {
    return componentsArray.push(element)
  });

  componentsArray.forEach(c => {
    return components.push(componentBuilder(c.component, c.props));
  });

  return components;
};
