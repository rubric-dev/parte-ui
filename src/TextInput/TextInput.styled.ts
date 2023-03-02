import styled, { css } from 'styled-components';
import { TextInputProps } from './TextInput.types';

export const Container = styled.div<Pick<TextInputProps, 'fullWidth'>>`
  ${({ fullWidth }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: ${fullWidth ? '100%' : 'fit-content'};
  `};
`;

export const InputWrapper = styled.div<{
  focused: boolean;
  error?: boolean;
  disabled?: boolean;
  hover?: boolean;
  fullWidth?: boolean;
}>`
  ${({ theme, focused, disabled, error, hover, fullWidth }) => css`
    box-sizing: border-box;
    display: inline-flex;
    overflow: hidden;
    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;
    width: ${fullWidth ? '100%' : 'fit-content'};
    ${hover &&
    css`
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
    `}
    ${focused &&
    css`
       {
        border: 1px solid ${theme.colorBorderFocused};
        ${theme.commonStyles.outline}
      }
    `}
    ${disabled &&
    css`
       {
        background-color: ${theme.colorBackgroundDisabled};
        border: 1px solid ${theme.colorBorderDisabled};
      }
    `}
    ${error &&
    css`
      &,
      &:hover,
      &:focus {
        border: 1px solid ${theme.colors.R400};
      }
    `}
  `}
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    column-gap: ${theme.spacing.spacing2}px;
    margin-bottom: ${theme.spacing.spacing4}px;
  `}
`;

export const Required = styled.label`
  ${({ theme }) => css`
    ${theme.typography.C200}
    color: ${theme.colors.R400};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    color: ${theme.colorHeading};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100}
    color: ${theme.colorParagraph};
    margin-bottom: ${theme.spacing.spacing8}px;
  `}
`;

export const LeftIconContainer = styled.div<TextInputProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${theme.spacing.spacing12}px;
    ${disabled &&
    css`
      & svg {
        color: ${theme.colors.N500};
      }
    `};
  `}
`;
export const RightIconContainer = styled.div<TextInputProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing.spacing10}px;
    svg {
      ${disabled &&
      css`
        color: ${theme.colorTextDisabled};
      `};
    }
  `}
`;

export const ErrorText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100};
    color: ${theme.colors.R400};
    margin-top: ${theme.spacing.spacing2}px;
  `}
`;

export const Input = styled.input<TextInputProps>`
  ${({ theme, leadingIcon, fullWidth }) => css`
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 32px;
    padding: ${theme.spacing.spacing8}px ${theme.spacing.spacing12}px;
    padding-left: ${leadingIcon
      ? css`
          ${theme.spacing.spacing8}px
        `
      : css`
          ${theme.spacing.spacing12}px
        `};
    padding-right: ${theme.spacing.spacing12}px;
    background-color: ${theme.colorBackgroundDefault};
    width: ${fullWidth ? '100%' : 'fit-content'};
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    font-family: inherit;
    ::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }

    &:hover {
      ::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    }
    &:focus {
      ::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    }
    &:disabled {
      color: ${theme.colorTextDisabled};
      ::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
      background-color: ${theme.colorBackgroundDisabled};
    }
  `}
`;
