import * as Styled from './typography.styled';
import { ParagraphProps } from './typography.types';

export default function Paragraph({
  children,
  overrideStyles,
  ...props
}: ParagraphProps) {
  return (
    <Styled.Paragraph {...props} style={overrideStyles}>
      {children}
    </Styled.Paragraph>
  );
}
