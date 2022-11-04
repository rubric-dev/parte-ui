import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function UXPinWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
