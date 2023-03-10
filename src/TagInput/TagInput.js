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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useMemo, useState, } from 'react';
import * as Styled from './TagInput.styled';
import { Box } from '../Layout';
import { v4 as uuidv4 } from 'uuid';
import Tag from './Tag/Tag';
const TagInput = forwardRef((_a, ref) => {
    var { addOnBlur, onAdd, onBlur: customOnblur, onInputChange, onRemove, values } = _a, props = __rest(_a, ["addOnBlur", "onAdd", "onBlur", "onInputChange", "onRemove", "values"]);
    const id = useMemo(() => uuidv4(), []);
    const { label, description, required = false, trailingIcon, errorText, disabled, onFocus, } = props;
    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const onKeyDown = (e) => {
        if (!inputValue && e.key === 'Backspace') {
            const temp = values.filter((tag) => tag.status !== 'disabled');
            onRemove(temp[temp.length - 1].value);
        }
        if (e.key !== 'Enter') {
            return;
        }
        if (!inputValue) {
            return;
        }
        if (e.nativeEvent.isComposing) {
            return;
        }
        onAdd(inputValue);
        setInputValue('');
    };
    const onBlur = (e) => {
        if (addOnBlur && inputValue) {
            onAdd(inputValue);
            setInputValue('');
        }
        setFocused(false);
        customOnblur === null || customOnblur === void 0 ? void 0 : customOnblur(e);
    };
    return (_jsxs(Styled.Container, { children: [label && (_jsxs(Styled.LabelWrapper, { children: [required && _jsx(Styled.Required, { children: "*" }), _jsx(Styled.Label, Object.assign({ htmlFor: id, title: required ? 'This field is required' : '' }, { children: label }))] })), description && _jsx(Styled.Description, { children: description }), _jsxs(Styled.InputWrapper, Object.assign({ hover: hover, focused: focused, disabled: disabled, error: !!errorText, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }, { children: [_jsxs(Box, Object.assign({ paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12, gap: 8, display: "flex", flex: "1", flexWrap: "wrap" }, { children: [!!values.length && (_jsx(_Fragment, { children: values.map((tag) => (_jsx(Tag, { tag: disabled ? Object.assign(Object.assign({}, tag), { status: 'disabled' }) : tag, onRemove: () => {
                                        if (tag.status === 'disabled') {
                                            return;
                                        }
                                        onRemove(tag.value);
                                    } }, tag.value.toString()))) })), _jsx(Styled.Input, Object.assign({ ref: ref, id: id }, props, { onFocus: (e) => {
                                    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
                                    setFocused(true);
                                }, onBlur: onBlur, onKeyDown: onKeyDown, value: inputValue, onChange: (e) => {
                                    setInputValue(e.target.value);
                                    onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange();
                                } }))] })), trailingIcon && (_jsx(Styled.RightIconContainer, Object.assign({ disabled: !!props.disabled }, { children: trailingIcon })))] })), errorText && _jsx(Styled.ErrorText, { children: errorText })] }));
});
export default TagInput;
