import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
export const Container = styled(Box) `
  ${({ theme, status }) => css `
      box-sizing: border-box;
      width: fit-content;
      border-radius: 4px;
      & svg {
        cursor: pointer;
      }
      ${status === 'normal' &&
    css `
        & {
          background-color: ${theme.colors.N200};
          svg {
            color: ${theme.colors.N800};
          }
        }
      `}
      ${status === 'error' &&
    css `
        & {
          background-color: ${theme.colors.R100};
          svg {
            color: ${theme.colors.N600};
          }
        }
      `}
      ${status === 'disabled' &&
    css `
        & {
          background-color: ${theme.colors.N100};
          svg {
            cursor: default;
            color: ${theme.colors.N500};
          }
        }
      `}
    `}
`;
export const Label = styled.span `
  ${({ theme, status }) => css `
      ${theme.typography.P100};
      ${status === 'normal' &&
    css `
        color: ${theme.colors.N800};
      `}
      ${status === 'error' &&
    css `
        color: ${theme.colors.N800};
      `}
      ${status === 'disabled' &&
    css `
        color: ${theme.colors.N500};
      `}
    `}
`;
