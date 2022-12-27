import { StyledButton } from './IconButton.styled';
import { IconButtonProps } from './IconButton.types';

const IconButton = ({ Icon, ...props }: IconButtonProps) => {
  return (
    <StyledButton iconColor={Icon.props.color} {...props}>
      {Icon}
    </StyledButton>
  );
};

export default IconButton;
