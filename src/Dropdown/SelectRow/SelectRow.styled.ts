import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { SelectRowProps } from './SelectRow.types';

const commonSelectRowStyle = css`
  position: relative;
  align-items: center;
  padding: 0px 12px;
  width: 240px;
  height: 32px;
  user-select: none;
`;

const titleStyle = css<SelectRowProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.N0};
    color: ${theme.colors.N600};
    ${theme.typography.C200}
  `}
`;
const elementStyle = css<SelectRowProps>`
  ${({ theme }) => css`
    background-color: ${theme.colorBackgroundDropdown};
    color: ${theme.colors.N800};
    ${theme.typography.P100}

    &:hover {
      background-color: ${theme.colorBackgroundDropdownHover};
    }
    &:active {
      background-color: ${theme.colors.B100};
      color: ${theme.colorBackgroundDropdownSelect};
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        border-radius: 0px 2px 2px 0px;
        background-color: ${theme.colors.B400};
        width: 2px;
      }
    }
  `}
`;
const searchStyle = css<SelectRowProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.N0};
    color: ${theme.colors.N600};
    ${theme.typography.C200}
  `}
`;

export const SelectRow = styled(Box)<SelectRowProps>`
  ${({ variant }) => {
    if (variant === 'title') {
      return css`
        ${titleStyle}
      `;
    }
    if (variant === 'element') {
      return css`
        ${elementStyle}
      `;
    }
    if (variant === 'search') {
      return css`
        ${searchStyle}
      `;
    }
  }}
  ${commonSelectRowStyle}
`;
