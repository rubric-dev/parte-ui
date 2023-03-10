import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import styled from 'styled-components';
import { commonBoxStyle } from './Box.styled';
const StyledBox = styled.div `
  ${commonBoxStyle}
  ${({ overrideStyles }) => overrideStyles}
`;
const Box = forwardRef((props, ref) => {
    return (_jsx(StyledBox, Object.assign({ ref: ref }, props, { children: props.children })));
});
export default Box;
