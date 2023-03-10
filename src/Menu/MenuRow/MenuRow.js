import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import * as Styled from './MenuRow.styled';
import Checkbox from '../../Checkbox';
export default function MenuRow(props) {
    const [hover, setHover] = useState(false);
    const { type = 'element', onSelect, leadingIcon, children, selected, disabled, } = props;
    return (_jsxs(Styled.Container, Object.assign({ type: type, hover: hover, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick: (e) => {
            e.preventDefault();
            !disabled && (onSelect === null || onSelect === void 0 ? void 0 : onSelect());
        } }, props, { children: [type === 'element' && leadingIcon && (_jsx(Styled.Icon, Object.assign({ selected: selected, disabled: disabled }, { children: leadingIcon }))), type === 'checkbox' && (_jsx(Styled.CheckboxContainer, { children: _jsx(Checkbox, { checked: selected }) })), children] })));
}
