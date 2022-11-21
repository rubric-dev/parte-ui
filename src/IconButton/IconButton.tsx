import styled, { css } from 'styled-components';
import { commonButtonStyles } from './IconButton.styled';
import { IconButtonProps } from './IconButton.types';

const StyledButton = styled.button<Omit<IconButtonProps, 'Icon'>>`
  ${commonButtonStyles}
  ${({ theme, variant }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colorBackgroundButtonPrimary};
      & svg {
        color: ${theme.colorTextButtonPrimary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonPrimaryHover};
        & svg {
          color: ${theme.colorTextButtonPrimaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonPrimaryFocused};
        ${theme.commonStyles.outline}
        & svg {
          color: ${theme.colorTextButtonPrimaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonPrimaryActive};
        & svg {
          color: ${theme.colorTextButtonPrimaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonPrimaryDisabled};
        & svg {
          color: ${theme.colorTextButtonPrimaryDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colorBackgroundButtonSecondary};
      border: 1px solid ${theme.colorBorderButtonSecondary};
      & svg {
        color: ${theme.colorTextButtonSecondary};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonSecondaryHover};
        border: 1px solid ${theme.colorBorderButtonSecondaryHover};
        & svg {
          color: ${theme.colorTextButtonSecondaryHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonSecondaryFocused};
        border: 1px solid ${theme.colorBorderButtonSecondaryFocused};
        ${theme.commonStyles.outline}
        & svg {
          color: ${theme.colorTextButtonSecondaryFocused};
        }
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonSecondaryActive};
        border: 1px solid ${theme.colorBorderButtonSecondaryActive};
        & svg {
          color: ${theme.colorTextButtonSecondaryActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonSecondaryDisabled};
        border: 1px solid ${theme.colorBorderButtonSecondaryDisabled};
        & svg {
          color: ${theme.colorTextButtonSecondaryDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === 'minimal' &&
    css`
      background-color: ${theme.colorBackgroundButtonMinimal};
      & svg {
        color: ${theme.colorTextButtonMinimal};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonMinimalHover};
        & svg {
          color: ${theme.colorTextButtonMinimalHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonMinimalFocused};
        & svg {
          color: ${theme.colorTextButtonMinimalFocused};
        }
        ${theme.commonStyles.outline}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonMinimalActive};
        & svg {
          color: ${theme.colorTextButtonMinimalActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonMinimalDisabled};
        & svg {
          color: ${theme.colorTextButtonMinimalDisabled};
        }
      }
    `}
  ${({ theme, variant }) =>
    variant === 'error' &&
    css`
      background-color: ${theme.colorBackgroundButtonError};
      & svg {
        color: ${theme.colorTextButtonError};
      }
      &:hover {
        background-color: ${theme.colorBackgroundButtonErrorHover};
        & svg {
          color: ${theme.colorTextButtonErrorHover};
        }
      }
      &:focus {
        background-color: ${theme.colorBackgroundButtonErrorFocused};
        & svg {
          color: ${theme.colorTextButtonErrorFocused};
        }
        ${theme.commonStyles.outlineError}
      }
      &:active {
        background-color: ${theme.colorBackgroundButtonErrorActive};
        & svg {
          color: ${theme.colorTextButtonErrorActive};
        }
      }
      &:disabled {
        background-color: ${theme.colorBackgroundButtonErrorDisabled};
        & svg {
          color: ${theme.colorTextButtonErrorDisabled};
        }
      }
    `}
`;

const IconButton = ({ Icon, ...props }: IconButtonProps) => {
  return <StyledButton {...props}>{Icon}</StyledButton>;
};

export default IconButton;
