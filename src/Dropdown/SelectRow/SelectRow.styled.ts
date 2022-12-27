import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { SelectRowProps } from './SelectRow.types';

const commonSelectRowStyle = css`
  position: relative;
  align-items: center;
  padding: 0px 12px;
  width: 240px;
  min-height: 32px;
  outline: none;
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

    &:focus {
      border: 1px solid ${theme.colors.B400};
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
    background-color: ${theme.colors.N50};
    color: ${theme.colors.N600};
    ${theme.typography.C200}
  `}
`;

export const SelectRow = styled(Box)<SelectRowProps>`
  ${commonSelectRowStyle}
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
`;

export const SearchInput = styled.input<SelectRowProps>`
  ${({ theme }) => {
    return css`
      background-color: transparent;
      border: none;
      outline: none;
      margin-left: ${theme.spacing.spacing8}px;
      width: 100%;

      &::placeholder {
        ${theme.typography.P100}
        color: ${theme.colors.N600};
      }
    `;
  }}
`;
