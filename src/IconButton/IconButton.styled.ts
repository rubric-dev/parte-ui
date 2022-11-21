import { css } from 'styled-components';
import { IconButtonProps } from './IconButton.types';

export const commonButtonStyles = css<Omit<IconButtonProps, 'Icon'>>`
  position: relative;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  outline: none;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: ${({ theme }) => `${theme.spacing.spacing10}px`};
  column-gap: 8px;
  border-radius: 4px;

  &::-moz-focus-inner {
    border: 0;
  }
`;
