import styled, { css } from 'styled-components';
import { TagStatus } from './Tag.types';

export const Container = styled.div<{ status: TagStatus }>`
  ${({ theme, status }) =>
    css`
      box-sizing: border-box;
      display: flex;
      align-items: center;
      width: fit-content;
      column-gap: ${theme.spacing.spacing2}px;
      border-radius: 4px;
      padding: ${theme.spacing.spacing0}px ${theme.spacing.spacing4}px;
      & svg {
        cursor: pointer;
      }
      ${status === 'normal' &&
      css`
        & {
          background-color: ${theme.colors.N200};
          svg {
            color: ${theme.colors.N800};
          }
        }
      `}
      ${status === 'error' &&
      css`
        & {
          background-color: ${theme.colors.R100};
          svg {
            color: ${theme.colors.N600};
          }
        }
      `}
      ${status === 'disabled' &&
      css`
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

export const Label = styled.span<{ status: TagStatus }>`
  ${({ theme, status }) =>
    css`
      ${theme.typography.P100};
      ${status === 'normal' &&
      css`
        color: ${theme.colors.N800};
      `}
      ${status === 'error' &&
      css`
        color: ${theme.colors.N800};
      `}
      ${status === 'disabled' &&
      css`
        color: ${theme.colors.N500};
      `}
    `}
`;
