import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import SheetClose from './SheetClose';
import * as Styled from './SideSheet.styled';
import { css } from 'styled-components';
import Overlay from '../Overlay';
const SideSheet = memo(function SideSheet(props) {
    const { width = 620, isShown, children, onOpenComplete, onCloseComplete, beforeClose, shouldAutoFocus = false, shouldCloseOnOverlayClick = true, shouldCloseOnEscapePress = true, preventBodyScrolling = false, } = props;
    return (_jsx(Overlay, Object.assign({ isShown: isShown, shouldAutoFocus: shouldAutoFocus, shouldCloseOnClick: shouldCloseOnOverlayClick, shouldCloseOnEsc: shouldCloseOnEscapePress, beforeClose: beforeClose, onExited: onCloseComplete, onEntered: onOpenComplete, preventBodyScrolling: preventBodyScrolling }, { children: ({ close, state }) => (_jsxs(Styled.Container, Object.assign({ "data-state": state, overrideStyles: css `
            width: ${width}px;
          ` }, { children: [_jsx(SheetClose, { state: state, onClick: close }), _jsx(Styled.Content, Object.assign({ "data-state": state, display: "flex", flexDirection: "column", overrideStyles: css `
              width: ${width}px;
            ` }, { children: typeof children === 'function' ? children({ close }) : children }))] }))) })));
});
export default SideSheet;
