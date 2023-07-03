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
};

let components: (JSX.Element | undefined)[] = [];

const componentBuilder = (id: string, component: string, props: any) => {
  if (component === "Button") {
    return <Button key={id} {...props}/>
  }
  if (component === "ButtonGroup") {
    return <ButtonGroup key={id} {...props}/>
  }
  if (component === "Checkboxes") {
    return <Checkboxes key={id} {...props}/>
  }
  if (component === "Heading") {
    return <Heading key={id} {...props}/>
  }
  if (component === "Hint") {
    return <Hint key={id} {...props}/>
  }
  if (component === "Label") {
    return <Label key={id} {...props}/>
  }
  if (component === "Page") {
    return <Page key={id} {...props}/>
  }
  if (component === "Radios") {
    return <Radios key={id} {...props}/>
  }
  if (component === "Select") {
    return <Select key={id} {...props}/>
  }
  if (component === "TextInput") {
    return <TextInput key={id} {...props}/>
  }
};
  


export const getComponents = ({ elements }: Props) => {

  let componentsArray: Array<any> = [];

  elements.map(element => {
    return componentsArray.push(element)
  });

  componentsArray.forEach(component => {
    return components.push(componentBuilder(component.id, component.component, component.props));
  });

  return components;
};
