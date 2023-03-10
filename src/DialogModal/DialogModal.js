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
import { memo } from 'react';
import { css, keyframes } from 'styled-components';
import { animationEasing } from '../constant';
import Dialog from '../Dialog/Dialog';
import Overlay from '../Overlay';
const ANIMATION_DURATION = 200;
const { acceleration, deceleration } = animationEasing;
const openAnimation = keyframes `
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1
  }
`;
const closeAnimation = keyframes `
  from {
    transform: scale(1);
    opacity: 1
  }
  to {
    transform: scale(0.8);
    opacity: 0
  }
`;
const DialogModal = memo(function DialogModal(_a) {
    var { preventBodyScrolling = false, shouldAutoFocus = false, shouldCloseOnEsc = true, shouldCloseOnOverlayClick = true, isShown = false, onCloseComplete, onOpenComplete, sideOffset = '16px', topOffset = '12vmin', children, width = 560 } = _a, dialogProps = __rest(_a, ["preventBodyScrolling", "shouldAutoFocus", "shouldCloseOnEsc", "shouldCloseOnOverlayClick", "isShown", "onCloseComplete", "onOpenComplete", "sideOffset", "topOffset", "children", "width"]);
    const sideOffsetWithUnit = Number.isInteger(sideOffset)
        ? `${sideOffset}px`
        : sideOffset;
    const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`;
    const topOffsetWithUnit = Number.isInteger(topOffset)
        ? `${topOffset}px`
        : topOffset;
    const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`;
    return (_jsx(Overlay, Object.assign({ isShown: isShown, shouldAutoFocus: shouldAutoFocus, shouldCloseOnClick: shouldCloseOnOverlayClick, shouldCloseOnEsc: shouldCloseOnEsc, onExited: onCloseComplete, onEntered: onOpenComplete, preventBodyScrolling: preventBodyScrolling }, { children: ({ close, state }) => (_jsx(Dialog, Object.assign({ close: close, width: width }, dialogProps, { elevation: 0, state: state, overrideStyles: css `
            width: ${width}px;
            max-width: ${maxWidth};
            max-height: ${maxHeight};
            margin: ${topOffsetWithUnit} ${sideOffsetWithUnit};
            &[data-state='entering'] {
              animation: ${openAnimation} ${ANIMATION_DURATION}ms
                ${deceleration} both;
            }
            &[data-state='entered'] {
              animation: ${openAnimation} ${ANIMATION_DURATION}ms
                ${deceleration} both;
            }
            &[data-state='exiting'] {
              animation: ${closeAnimation} ${ANIMATION_DURATION}ms
                ${acceleration} both;
            }
          ` }, { children: children }))) })));
});
export default DialogModal;
