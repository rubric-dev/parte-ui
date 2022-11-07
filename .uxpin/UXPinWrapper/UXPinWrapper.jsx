import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/common/theme/index';
export default function UXPinWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
