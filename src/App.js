import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import Page from './pages/page';

require('typeface-dm-sans');

theme.fonts.body = 'DM Sans';
console.log(theme);

export default () => (
  <ThemeProvider theme={theme}>
    <Page />
  </ThemeProvider>
);
