import { forwardRef } from 'react';
import styled from 'styled-components';
import { commonBoxStyle } from './Box.styled';
import { BoxProps } from './Box.types';

const StyledBox = styled.div<BoxProps>`
  ${commonBoxStyle}
  ${({ overrideStyles }) => overrideStyles}
`;

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <StyledBox ref={ref} {...props}>
      {!props.children ? <p>Drop any components u like</p> : props.children}
    </StyledBox>
  );
});

export default Box;
