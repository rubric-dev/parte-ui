import styled, { css } from 'styled-components';
import Typography from '../@foundations/Typography/typography';
import { Box } from '../Layout';

export const Container = styled(Box)<{
  error: boolean;
  disabled: boolean;
}>`
  ${({ theme, error, disabled }) => css`
    width: 280px;
    height: 32px;
    border-radius: 4px;
    display: flex;
    border: 1px solid ${theme.colors.N400};
    cursor: pointer;
    column-gap: 12px;
    background-color: ${theme.colors.N0};
    ${error &&
    css`
      border-color: ${theme.colors.R400};
    `}
    ${disabled &&
    css`
      cursor: default;
      border-color: ${theme.colors.N300};
      background-color: ${theme.colors.N100};
    `}
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;
    padding: 8px 12px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `}
`;

export const Button = styled.div<{
  hover: boolean;
  focused: boolean;
  error: boolean;
  disabled: boolean;
}>`
  ${({ theme, hover, focused, error, disabled }) => css`
    background-color: unset;
    box-sizing: border-box;
    padding: 8px 16px;
    border: 1px solid ${theme.colors.N400};
    border-radius: 4px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.N0};
    margin: -1px;
    ${!disabled &&
    hover &&
    css`
      border-color: ${theme.colors.N600};
    `}
    ${!disabled &&
    focused &&
    css`
      border-color: ${theme.colors.N500};
      ${theme.commonStyles.outline}
    `}
    ${error &&
    css`
      border-color: ${theme.colors.R400};
    `}
    ${disabled &&
    css`
      border-color: ${theme.colors.N300};
      background-color: ${theme.colors.N0};
    `}
  `}
`;

export const ButtonText = styled.span<{
  hover: boolean;
  focused: boolean;
  error: boolean;
  disabled: boolean;
}>`
  ${({ theme, hover, focused, error, disabled }) => css`
    ${Typography.C200}
    color: ${theme.colors.N700};
    ${(hover || focused) &&
    css`
      color: ${theme.colors.N800};
    `}
    ${error &&
    css`
      color: ${theme.colors.R400};
    `}
    ${disabled &&
    css`
      color: ${theme.colors.N500};
    `}
  `}
`;

export const ErrorText = styled.span<{
  hover: boolean;
  focused: boolean;
  error: boolean;
  disabled: boolean;
}>``;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    column-gap: ${theme.spacing.spacing2}px;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    color: ${theme.colorHeading};
  `}
`;
