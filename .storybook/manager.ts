import { addons } from '@storybook/addons';

import Theme from './theme';

addons.setConfig({
  theme: Theme,
  sidebar: {
    showRoots: true,
  },
  isToolShown: false,
  initialActive: 'docs',
});
