import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Positioner from '../Positioner/Positioner';
import { Position } from '../Positioner';
import * as Styled from './Tooltip.styled';
import { Fragment, useState } from 'react';
const Tooltip = ({ children, content, showDelay = 100, hideDelay = 100, position = Position.BOTTOM, isShown = true, }) => {
    const child = typeof content === 'string' ? _jsx("p", { children: content }) : content;
    const [targetRef, setTargetRef] = useState(null);
    return (_jsxs(Fragment, { children: [_jsx(Styled.TargetWrapper, Object.assign({ ref: setTargetRef }, { children: children })), isShown && (_jsx(Positioner, Object.assign({ position: position, showDelay: showDelay, hideDelay: hideDelay, targetEl: targetRef }, { children: _jsx(Styled.Content, { children: child }) })))] }));
};
export default Tooltip;
