import React from 'react';

import { InsetText } from './InsetText';

export default {
  title: "Example/InsetText",
  component: InsetText,
}

const Template = (args) => <InsetText {...args} />;

export const Standard = Template.bind({});
  Standard.args = {
    text: 'This is an InsetText component.'
  }