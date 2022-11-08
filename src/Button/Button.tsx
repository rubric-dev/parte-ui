import styled, { css } from 'styled-components';
import { commonButtonStyles } from './Button.styled';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  ${({ variant, size }) =>
    size === 'sm'
      ? css`
          width: 100px;
          height: 30px;
        `
      : css`
          width: 300px;
          height: 50px;
        `};
  ${commonButtonStyles}
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton
      type={props.type}
      onClick={() => console.log('test121')}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      size={props.size}
      variant={props.variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
