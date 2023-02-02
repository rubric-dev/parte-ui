import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button = ({
  children,
  leadingIcon,
  trailingIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};

export default Button;
