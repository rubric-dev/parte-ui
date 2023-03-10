import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef, useCallback, } from 'react';
import preventBodyScroll from '../common/utils/scroll.util';
import * as Styled from './Overlay.styled';
import { Transition } from 'react-transition-group';
import Portal from '../Portal';
const Overlay = memo(({ children, preventBodyScrolling = true, shouldAutoFocus = false, shouldCloseOnClick = true, shouldCloseOnEsc = true, beforeClose, isShown, onExit, onExiting, onExited, onEnter, onEntering, onEntered, }) => {
    const [previousActiveElement, setPreviousActiveElement] = useState(null);
    const containerRef = useRef(null);
    const [status, setStatus] = useState(isShown ? 'entering' : 'exited');
    useEffect(() => {
        if (isShown) {
            setStatus('entering');
        }
    }, [isShown]);
    const close = useCallback(() => {
        if (beforeClose === null || beforeClose === void 0 ? void 0 : beforeClose())
            return;
        setStatus('exiting');
    }, [beforeClose]);
    const onEsc = (e) => {
        if (e.key === 'Escape' && shouldCloseOnEsc)
            close();
    };
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInsideOverlay = () => {
        // Always delay focus manipulation to just before repaint to prevent scroll jumping
        return requestAnimationFrame(() => {
            // Container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            if (!shouldAutoFocus ||
                containerRef.current == null ||
                document.activeElement == null ||
                !isShown) {
                return;
            }
            const isFocusOutsideModal = !containerRef.current.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // Element marked autofocus has higher priority than the other clowns
                const autofocusElement = containerRef.current.querySelector('[autofocus]');
                const wrapperElement = containerRef.current.querySelector('[tabindex]');
                const buttonElement = containerRef.current.querySelector('button');
                if (autofocusElement) {
                    autofocusElement.focus();
                }
                else if (wrapperElement) {
                    wrapperElement.focus();
                }
                else if (buttonElement) {
                    buttonElement.focus();
                }
            }
        });
    };
    const bringFocusBackToTarget = () => {
        return requestAnimationFrame(() => {
            if (previousActiveElement == null ||
                containerRef.current == null ||
                document.activeElement == null) {
                return;
            }
            // Bring back focus on the target.
            const isFocusInsideModal = containerRef.current.contains(document.activeElement);
            if (document.activeElement === document.body || isFocusInsideModal) {
                previousActiveElement.focus();
            }
        });
    };
    useEffect(() => {
        if (status === 'entered') {
            setPreviousActiveElement(document.activeElement);
            bringFocusInsideOverlay();
        }
        if (status === 'entering') {
            document.body.addEventListener('keydown', onEsc, false);
        }
        if (status === 'exiting') {
            document.body.removeEventListener('keydown', onEsc, false);
            bringFocusBackToTarget();
        }
    }, [status]);
    const handleBodyScroll = (preventScroll) => {
        if (preventBodyScrolling) {
            preventBodyScroll(preventScroll);
        }
    };
    useEffect(() => {
        return () => {
            handleBodyScroll(false);
            document.body.removeEventListener('keydown', onEsc, false);
        };
    }, []);
    const handleEnter = (isAppearing) => {
        handleBodyScroll(true);
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(isAppearing);
    };
    const handleEntering = (isAppearing) => {
        setStatus('entering');
        onEntering === null || onEntering === void 0 ? void 0 : onEntering(isAppearing);
    };
    const handleEntered = (isAppearing) => {
        setStatus('entered');
        onEntered === null || onEntered === void 0 ? void 0 : onEntered(isAppearing);
    };
    const handleExit = () => {
        handleBodyScroll(false);
        onExit === null || onExit === void 0 ? void 0 : onExit();
    };
    const handleExiting = () => {
        setStatus('exiting');
        onExiting === null || onExiting === void 0 ? void 0 : onExiting();
    };
    const handleExited = () => {
        setStatus('exited');
        onExited === null || onExited === void 0 ? void 0 : onExited();
    };
    const handleBackdropClick = (e) => {
        if (e.target !== e.currentTarget || !shouldCloseOnClick)
            return;
        close();
    };
    if (status === 'exited') {
        return null;
    }
    return (_jsx(Portal, { children: _jsx(Transition, Object.assign({ nodeRef: containerRef, appear: true, unmountOnExit: true, timeout: Styled.ANIMATION_DURATION, in: isShown && status !== 'exiting', onExit: handleExit, onExiting: handleExiting, onExited: handleExited, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered }, { children: (state) => (_jsx(Styled.BackDrop, Object.assign({ display: "flex", justifyContent: "center", ref: containerRef, onClick: handleBackdropClick, "data-state": state }, { children: typeof children === 'function'
                    ? children({ state, close })
                    : children }))) })) }));
});
export default Overlay;
