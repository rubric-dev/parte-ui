import styled, { css } from 'styled-components';
import { Box } from '../Layout';

const CommonStyle = css`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.N400};
    background-color: ${theme.colors.N0};
    border-radius: 8px;
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;
  `}
`;

export const DefaultCard = styled(Box)<{ disabled?: boolean }>`
  ${({ theme, disabled }) => css`
    ${CommonStyle}
    &:hover {
      box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    }
    &:focus,
    &:active {
      border: 1px solid ${theme.colors.B400};
      background-color: ${theme.colors.N50};
    }
    ${disabled &&
    css`
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        border-color: transparent;
        background-color: ${theme.colors.N50};
      }
    `}
  `}
`;

export const SelectableCard = styled(Box)<{
  disabled?: boolean;
  selected?: boolean;
}>`
  ${({ theme, disabled, selected }) => css`
    ${CommonStyle}
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    }
    &:focus,
    &:active {
      ${theme.commonStyles.outline};
      box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    }
    ${disabled &&
    css`
      &,
      &:hover,
      &:focus,
      &:active {
        cursor: default;
        box-shadow: none;
        outline: none;
        border-color: transparent;
        background-color: ${theme.colors.N75};
      }
    `}
    ${selected &&
    css`
      border-color: ${theme.colors.B400};
      background-color: ${theme.colors.N50};
    `}
  `}
`;
