import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

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
