import { jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as Styled from './Tab.styled';
const Tab = forwardRef((props, ref) => {
    const { leadingIcon, trailingIcon, children, variant = 'Primary', direction = 'horizontal', } = props;
    return (_jsxs(Styled.Tab, Object.assign({ ref: ref, type: "button" }, props, { variant: variant, direction: direction }, { children: [leadingIcon, children, trailingIcon] })));
});
export default Tab;
