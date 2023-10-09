import React from 'react';

import { Button } from '../../components/Button/Button';
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup';
import { Checkboxes } from '../../components/Checkboxes/Checkboxes';
import { Heading } from '../../components/Heading/Heading';
import { Hint } from '../../components/Hint/Hint';
import { Label } from '../../components/Label/Label';
import { Radios } from '../../components/Radios/Radios';
import { Select } from '../../components/Select/Select';
import { TextInput } from '../../components/TextInput/TextInput';

import { ComponentTypes } from '../../models';
import cleanAttributes from './cleanAttributes';




const getHeading = (config: any) => {
  const attrs = cleanAttributes(config);
  return <Heading headingText={config.headingText} {...attrs}>{config.content}</Heading>;
};

const getTextInput = (config: any) => {
  const attrs = cleanAttributes(config);
  return <TextInput id={config.id} {...attrs} />; 
};


const getComponentByType = (config: any) => {
  switch (config.type) {
    case ComponentTypes.HEADING:
      return getHeading(config);
    case ComponentTypes.TEXT:
      return getTextInput(config);
  }
};

const getComponent = (config: any) => {
  const component = getComponentByType(config);
  return component;
};

export default getComponent;
