import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, useState } from 'react';
import * as Styled from './TextInput.styled';
import { v4 as uuidv4 } from 'uuid';
const TextInput = forwardRef((props, ref) => {
    const id = useMemo(() => uuidv4(), []);
    const { label, description, required = false, leadingIcon, trailingIcon, errorText, disabled, onFocus, onBlur, fullWidth, } = props;
    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);
    return (_jsxs(Styled.Container, Object.assign({ fullWidth: fullWidth }, { children: [label && (_jsxs(Styled.LabelWrapper, { children: [required && _jsx(Styled.Required, { children: "*" }), _jsx(Styled.Label, Object.assign({ htmlFor: id, title: required ? 'This field is required' : '' }, { children: label }))] })), description && _jsx(Styled.Description, { children: description }), _jsxs(Styled.InputWrapper, Object.assign({}, props, { hover: hover, focused: focused, disabled: disabled, error: !!errorText, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), id: "parte-text-input-wrapper" }, { children: [leadingIcon && (_jsx(Styled.LeftIconContainer, Object.assign({ disabled: props.disabled }, { children: leadingIcon }))), _jsx(Styled.Input, Object.assign({ ref: ref, id: id }, props, { onFocus: (e) => {
                            onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
                            setFocused(true);
                        }, onBlur: (e) => {
                            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                            setFocused(false);
                        } })), trailingIcon && (_jsx(Styled.RightIconContainer, Object.assign({ disabled: props.disabled }, { children: trailingIcon })))] })), errorText && _jsx(Styled.ErrorText, { children: errorText })] })));
});
export default TextInput;
