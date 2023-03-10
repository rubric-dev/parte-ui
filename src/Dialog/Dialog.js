import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { css } from 'styled-components';
import { Button } from '../Button';
import IconButton from '../IconButton';
import ActionCrossIcon from '../icons/Icons/ActionCrossIcon';
import * as Styled from './Dialog.styled';
const Dialog = memo(({ close, onCancel, onConfirm, children, header, title, footer, hasCancel = true, hasClose = true, hasFooter = true, hasHeader = true, cancelLabel = '취소', confirmLabel = '확인', confirmVariant = 'primary', isConfirmDisabled = false, isConfirmLoading = false, minHeightContent = 80, width = 600, elevation = 2, state, overrideStyles, }) => {
    const handleCancel = () => (onCancel ? onCancel(close) : close());
    const handleConfirm = () => (onConfirm ? onConfirm(close) : close());
    const renderChildren = () => {
        if (typeof children === 'function') {
            return children({ close });
        }
        if (typeof children === 'string') {
            return _jsx("span", { children: children });
        }
        return children;
    };
    const renderNode = (node) => {
        if (typeof node === 'function') {
            return node({ close });
        }
        return node;
    };
    const renderHeader = () => {
        if (!header && !hasHeader) {
            return undefined;
        }
        return (_jsx(Styled.Header, Object.assign({ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 32, paddingBottom: 24 }, { children: header ? (renderNode(header)) : (_jsxs(_Fragment, { children: [_jsx(Styled.Title, { children: title }), hasClose && (_jsx(IconButton, { variant: "minimal", size: 24, Icon: _jsx(ActionCrossIcon, { size: 12 }), onClick: handleCancel }))] })) })));
    };
    const renderFooter = () => {
        if (!footer && !hasFooter) {
            return undefined;
        }
        return (_jsx(Styled.Footer, { children: footer ? (renderNode(footer)) : (_jsxs(_Fragment, { children: [hasCancel && (_jsx(Button, Object.assign({ variant: "secondary", tabIndex: 0, onClick: handleCancel }, { children: cancelLabel }))), _jsx(Button, Object.assign({ tabIndex: 0, variant: confirmVariant, isLoading: isConfirmLoading, disabled: isConfirmDisabled, onClick: handleConfirm }, { children: confirmLabel }))] })) }));
    };
    return (_jsxs(Styled.DialogContainer, Object.assign({ role: "dialog", display: "flex", flexDirection: "column", elevation: elevation, "data-state": state, overrideStyles: css `
          width: ${width}px;
          ${overrideStyles}
        ` }, { children: [renderHeader(), _jsx(Styled.Content, Object.assign({ overrideStyles: css `
            min-height: ${minHeightContent}px;
          ` }, { children: renderChildren() })), renderFooter()] })));
});
export default Dialog;
