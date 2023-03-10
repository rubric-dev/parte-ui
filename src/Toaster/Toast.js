import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import Alert from '../Alerts/Alert';
import { Box } from '../Layout';
import * as Styled from './ToastManager.styled';
const duration = 5;
const ANIMATION_DURATION = 240;
const Toast = memo(function Toast({ toast, onRemove }) {
    const transitionRef = useRef(null);
    const [isShown, setIsShown] = useState(true);
    const [height, setHeight] = useState(0);
    const closeTimer = useRef(null);
    const clearCloseTimer = useCallback(() => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    }, []);
    const close = useCallback(() => {
        clearCloseTimer();
        setIsShown(false);
    }, [clearCloseTimer]);
    const startCloseTimer = useCallback(() => {
        if (duration) {
            clearCloseTimer();
            closeTimer.current = setTimeout(() => {
                close();
            }, duration * 1000);
        }
    }, [duration, clearCloseTimer, close]);
    useEffect(() => {
        startCloseTimer();
        return () => {
            clearCloseTimer();
        };
    }, [startCloseTimer, clearCloseTimer]);
    useEffect(() => {
        if (toast.isShown !== isShown && typeof toast.isShown === 'boolean') {
            setIsShown(toast.isShown);
        }
    }, [isShown, toast.isShown]);
    const handleMouseEnter = useCallback(() => clearCloseTimer(), [clearCloseTimer]);
    const handleMouseLeave = useCallback(() => startCloseTimer(), [startCloseTimer]);
    const onRef = useCallback((ref) => {
        if (ref === null)
            return;
        const { height: rectHeight } = ref.getBoundingClientRect();
        setHeight(rectHeight);
    }, []);
    return (_jsx(Transition, Object.assign({ nodeRef: transitionRef, appear: true, unmountOnExit: true, timeout: ANIMATION_DURATION, in: isShown, onExited: onRemove }, { children: (state) => {
            return (_jsx(Styled.ToastBox, Object.assign({ ref: transitionRef, "data-state": state, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, marginBottom: isShown ? 0 : -height, height: height }, { children: _jsx(Box, Object.assign({ ref: onRef, padding: 8 }, { children: _jsx(Alert, { toastId: toast.id, type: "toast", status: toast.status, title: toast.title, description: toast.description, onClose: close }) })) })));
        } })));
});
export default Toast;
