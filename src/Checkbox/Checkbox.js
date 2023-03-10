import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import * as Styled from './Checkbox.styled';
import { Box } from '../Layout';
import ActionSmallTickIcon from '../icons/Icons/ActionSmallTickIcon';
const Checkbox = ({ label, disabled = false, checked = false, indeterminate = false, onChange, }) => {
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const renderIcon = () => {
        if (indeterminate) {
            return _jsx(Styled.Indeterminate, {});
        }
        if (checked) {
            return _jsx(ActionSmallTickIcon, { size: 16 });
        }
        return _jsx(_Fragment, {});
    };
    return (_jsxs(Styled.Container, Object.assign({ disabled: disabled, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setPressed(true), onMouseUp: () => setPressed(false) }, { children: [_jsxs(Styled.Checkbox, Object.assign({ hover: hover, pressed: pressed, checked: checked || indeterminate, disabled: disabled, alignItems: "center" }, { children: [_jsx(Styled.Input, { type: "checkbox", checked: checked, disabled: disabled, onChange: (e) => {
                            onChange === null || onChange === void 0 ? void 0 : onChange(e);
                        } }), _jsx(Box, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center", flex: "1" }, { children: renderIcon() }))] })), label && _jsx(Styled.Label, { children: label })] })));
};
export default Checkbox;
