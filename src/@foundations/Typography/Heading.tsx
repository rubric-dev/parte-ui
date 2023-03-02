import * as Styled from './typography.styled';
import { HeadingProps } from './typography.types';

export default function Heading({
  children,
  overrideStyles,
  ...props
}: HeadingProps) {
  return (
    <Styled.Heading {...props} style={overrideStyles}>
      {children}
    </Styled.Heading>
  );
}
