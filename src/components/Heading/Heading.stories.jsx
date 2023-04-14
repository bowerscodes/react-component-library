import React from 'react';

import { Heading } from './Heading';

export default {
  title: 'Example/Heading',
  component: Heading
};

const Template = (args) => <Heading {...args} />;

export const XL = Template.bind({});
XL.args = {
  id: 'heading-xl--example',
  headingText: 'Extra Large Heading',
  size: 'xl'
};

export const L = Template.bind({});
L.args = {
  id: 'heading-l--example',
  headingText: 'Large Heading',
  size: 'l'
};

export const M = Template.bind({});
M.args = {
  id: 'heading-m--example',
  headingText: 'Medium Heading',
  size: 'm'
};

export const S = Template.bind({});
S.args = {
  id: 'heading-s--example',
  headingText: 'Small Heading',
  size: 's'
};

export const XS = Template.bind({});
XS.args = {
  id: 'heading-xs--example',
  headingText: 'Extra Small Heading',
  size: 'xs'
};

export const XXS = Template.bind({});
XXS.args = {
  id: 'heading-xxs--example',
  headingText: 'Extra Extra Small Heading',
  size: 'xxs'
};
