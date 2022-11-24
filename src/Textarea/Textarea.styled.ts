import styled, { css } from 'styled-components';
import { TextAreaProps } from './Textarea.types';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
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

export const ErrorText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100};
    color: ${theme.colors.R400};
    margin-top: ${theme.spacing.spacing2}px;
  `}
`;

export const Textarea = styled.textarea<TextAreaProps>`
  ${({ theme, errorText }) => css`
    outline: none;
    box-sizing: border-box;
    width: 100%;
    min-height: 80px;
    min-width: 15px;
    padding: ${theme.spacing.spacing8}px ${theme.spacing.spacing12}px;
    background-color: ${theme.colorBackgroundDefault};
    color: ${theme.colorParagraph};
    ${theme.typography.P100}
    display: inline-flex;
    border: 1px solid ${theme.colorBorderDefault};
    border-radius: 4px;
    ::placeholder {
      color: ${theme.colorTextPlaceholderDefault};
    }

    &:hover {
      border: 1px solid ${theme.colorBorderHover};
      background: ${theme.colorBackgroundHover};
      ::placeholder {
        color: ${theme.colorTextPlaceholderHover};
      }
    }
    &:focus {
      border: 1px solid ${theme.colorBorderFocused};
      ${theme.commonStyles.outline}
      ::placeholder {
        color: ${theme.colorTextPlaceholderFocused};
      }
    }
    &:disabled {
      color: ${theme.colorTextDisabled};
      background-color: ${theme.colorBackgroundDisabled};
      border: 1px solid ${theme.colorBorderDisabled};
      ::placeholder {
        color: ${theme.colorTextPlaceholderDisabled};
      }
    }
    ${!!errorText &&
    css`
      &,
      &:hover,
      &:focus {
        border: 1px solid ${theme.colors.R400};
      }
    `}
  `}
`;
