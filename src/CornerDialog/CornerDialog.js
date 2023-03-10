var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import Dialog from '../Dialog';
import Portal from '../Portal';
import * as Styled from './CornerDialog.styled';
const CornerDialog = memo(function CornerDialog(props) {
    const { width = 448, children, isShown, onOpenComplete, onCloseComplete } = props, rest = __rest(props, ["width", "children", "isShown", "onOpenComplete", "onCloseComplete"]);
    const [exiting, setExiting] = useState(false);
    const [exited, setExited] = useState(!props.isShown);
    const transitionRef = useRef(null);
    useEffect(() => {
        if (isShown) {
            setExited(false);
        }
    }, [isShown]);
    const handleExited = useCallback(() => {
        setExiting(false);
        setExited(true);
        onCloseComplete === null || onCloseComplete === void 0 ? void 0 : onCloseComplete();
    }, [onCloseComplete]);
    const handleClose = useCallback(() => setExiting(true), []);
    if (exited) {
        return null;
    }
    return (_jsx(Portal, { children: _jsx(Transition, Object.assign({ nodeRef: transitionRef, appear: true, unmountOnExit: true, timeout: Styled.ANIMATION_DURATION, in: isShown && !exiting, onExited: handleExited, onEntered: onOpenComplete }, { children: (state) => (_jsx(Styled.DialogContainer, Object.assign({ ref: transitionRef, role: "dialog", "data-state": state }, { children: _jsx(Dialog, Object.assign({ width: width }, rest, { close: handleClose }, { children: children })) }))) })) }));
});
export default CornerDialog;
