import * as Styled from './typography.styled';
import { CodeProps } from './typography.types';

export default function Code({
  children,
  overrideStyles,
  ...props
}: CodeProps) {
  return (
    <Styled.Code {...props} style={overrideStyles}>
      {children}
    </Styled.Code>
  );
}
