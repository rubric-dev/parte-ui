import styled, { css } from 'styled-components';
import { commonButtonStyles } from './Button.styled';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  ${({ variant }) =>
    variant === 'flat'
      ? css`
          width: 100%;
          height: 100%;
        `
      : css`
          display: flex;
        `};
  ${commonButtonStyles}
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={() => console.log('test')}
      disabled={props.disabled}
      fullWidth
      size="md"
      variant="flat"
    >
      {children}
    </StyledButton>
  );
};

export default Button;
