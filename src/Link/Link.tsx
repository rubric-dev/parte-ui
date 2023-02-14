import * as Styled from './Link.styled';
import { LinkProps } from './Link.types';

const Link = ({ disabled, children, ...props }: LinkProps) => {
  return disabled ? (
    <Styled.DisabledLink>{children}</Styled.DisabledLink>
  ) : (
    <Styled.Link {...props}>{children}</Styled.Link>
  );
};
export default Link;
