import { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const commonButtonStyles = css<ButtonProps>`
  position: 'relative';
  font-weight: 500;
  display: 'inline-flex';
  align-items: 'center';
  flex-wrap: 'nowrap';
  justify-content: 'center';
  text-decoration: 'none';
  vertical-align: 'middle';
  border: 'none';
  outline: 'none';
  user-select: 'none';
  cursor: 'pointer';
  whitespace: 'nowrap';
  webkit-font-smoothing: 'antialiased';
  webkit-appearance: 'none';
  moz-appearance: 'none';
  '&::-moz-focus-inner ': {
    border: 0;
  }
`;
