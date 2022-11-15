import styled, { css } from 'styled-components';
import { commonButtonStyles } from './Button.styled';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  ${commonButtonStyles}
  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colorBackgroundButtonPrimary};
      color: ${theme.colorTextButtonPrimary};
      &:hover {
        background-color: ${theme.colorBackgroundButtonPrimaryHover};
        color: ${theme.colorTextButtonPrimaryHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonPrimaryFocused};
        color: ${theme.colorTextButtonPrimaryFocused};
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonPrimaryActive};
        color: ${theme.colorTextButtonPrimaryActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonPrimaryDisabled};
        color: ${theme.colorTextButtonPrimaryDisabled};
      }
    `}
  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      color: ${theme.colorTextButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        color: ${theme.colorTextButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        color: ${theme.colorTextButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        color: ${theme.colorTextButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        color: ${theme.colorTextButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
      }
    `}
  ${({ theme, variant }) =>
    variant === 'minimal' &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      color: ${theme.colorTextButtonMinimal};
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        color: ${theme.colorTextButtonMinimalHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        color: ${theme.colorTextButtonMinimalFocused};
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        color: ${theme.colorTextButtonMinimalActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        color: ${theme.colorTextButtonMinimalDisabled};
      }
    `}
  ${({ theme, variant }) =>
    variant === 'error' &&
    css`
      background-color: ${theme.colorBackgroundButtonError};
      color: ${theme.colorTextButtonError};
      &:hover {
        background-color: ${theme.colorBackgroundButtonErrorHover};
        color: ${theme.colorTextButtonErrorHover};
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonErrorFocused};
        color: ${theme.colorTextButtonErrorFocused};
        ${theme.commonStyles.outlineError}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonErrorActive};
        color: ${theme.colorTextButtonErrorActive};
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonErrorDisabled};
        color: ${theme.colorTextButtonErrorDisabled};
      }
    `}
`;

const Button = ({ children, leftSlot, rightSlot, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {leftSlot}
      {children}
      {rightSlot}
    </StyledButton>
  );
};

export default Button;
