import { css } from 'styled-components';
import { ButtonProps } from './Button.types';

// 딘순 예시입니다.
export const commonButtonStyles = css<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size, fullWidth, theme }) =>
    fullWidth ? theme.palette.aqua100 : theme.spacing.gsUitkH0};
`;
