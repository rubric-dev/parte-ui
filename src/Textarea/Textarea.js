import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, useState } from 'react';
import * as Styled from './Textarea.styled';
import { v4 as uuidv4 } from 'uuid';
const Textarea = forwardRef((props, ref) => {
    const id = useMemo(() => uuidv4(), []);
    const { label, description, required = false, errorText, fullWidth, onFocus, onBlur, disabled, } = props;
    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);
    return (_jsxs(Styled.Container, Object.assign({ fullWidth: fullWidth }, { children: [label && (_jsxs(Styled.LabelWrapper, { children: [required && _jsx(Styled.Required, { children: "*" }), _jsx(Styled.Label, Object.assign({ htmlFor: id, title: required ? 'This field is required' : '' }, { children: label }))] })), description && _jsx(Styled.Description, { children: description }), _jsx(Styled.TextareaWrapper, Object.assign({ hover: hover, disabled: disabled, focused: focused, error: !!errorText, fullWidth: fullWidth }, { children: _jsx(Styled.Textarea, Object.assign({ id: id, ref: ref, hover: hover, focused: focused }, props, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onFocus: (e) => {
                        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
                        setFocused(true);
                    }, onBlur: (e) => {
                        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                        setFocused(false);
                    } })) })), errorText && _jsx(Styled.ErrorText, { children: errorText })] })));
});
export default Textarea;
