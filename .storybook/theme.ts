import { create } from '@storybook/theming';

const Theme = create({
  base: 'light',

  brandTitle: 'React Component Library',

  colorPrimary: '#292F36',
  colorSecondary: '#4ECDC4',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#292F36',
  appBorderRadius: 1,

  // Typography
  fontBase: '"Roboto", arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#292F36',
  textInverseColor: '#F7FFF7',
});

export default Theme;
