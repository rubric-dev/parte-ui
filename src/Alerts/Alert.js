import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconButton from '../IconButton';
import ActionCrossIcon from '../icons/Icons/ActionCrossIcon';
import AlertDangerIcon from '../icons/Icons/AlertDangerIcon';
import AlertInfoIcon from '../icons/Icons/AlertInfoIcon';
import AlertSuccessIcon from '../icons/Icons/AlertSuccessIcon';
import AlertWarningIcon from '../icons/Icons/AlertWarningIcon';
import * as Styled from './Alert.styled';
const renderIcon = (currentStatus) => {
    switch (currentStatus) {
        case 'success':
            return _jsx(AlertSuccessIcon, { size: 16 });
        case 'info':
            return _jsx(AlertInfoIcon, { size: 16 });
        case 'warning':
            return _jsx(AlertWarningIcon, { size: 16 });
        case 'error':
            return _jsx(AlertDangerIcon, { size: 16 });
    }
};
const Alert = (props) => {
    if (props.type === 'alert-inline') {
        return (_jsxs(Styled.Alert, Object.assign({ type: props.type, status: props.status }, { children: [renderIcon(props.status), _jsx(Styled.Title, { children: props.message })] })));
    }
    if (props.type === 'toast') {
        return (_jsxs(Styled.Alert, Object.assign({}, props, { toastId: props.toastId, type: props.type, status: props.status, onClose: props.onClose }, { children: [_jsxs(Styled.InfoWrap, { children: [renderIcon(props.status), _jsxs(Styled.Header, { children: [_jsx(Styled.Title, { children: props.title }), _jsx(IconButton, { variant: "minimal", size: 24, Icon: _jsx(ActionCrossIcon, { size: 12, color: props.status }), onClick: props.onClose })] })] }), props.description && (_jsx(Styled.Description, { children: props.description }))] })));
    }
    return (_jsxs(Styled.Alert, Object.assign({}, props, { type: props.type, status: props.status }, { children: [_jsxs(Styled.InfoWrap, { children: [renderIcon(props.status), _jsx(Styled.Title, { children: props.title })] }), props.description && (_jsx(Styled.Description, { children: props.description }))] })));
};
export default Alert;
