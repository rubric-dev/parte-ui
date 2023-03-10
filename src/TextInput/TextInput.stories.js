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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TextInput from './TextInput';
import ActionSearchIcon from '../icons/Icons/ActionSearchIcon';
import InterfaceCaretDownIcon from '../icons/Icons/InterfaceCaretDownIcon';
import ActionCrossIcon from '../icons/Icons/ActionCrossIcon';
export default {
    title: 'Components/Forms/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(TextInput, Object.assign({}, args, { placeholder: "Placeholder" }));
};
export const Default = Template.bind({});
Default.args = {};
export const Search = Template.bind({});
Search.args = {
    leadingIcon: _jsx(ActionSearchIcon, { size: 12, color: "muted" }),
};
export const Disabled = Template.bind({});
Disabled.args = {
    leadingIcon: _jsx(ActionSearchIcon, { size: 12, color: "muted" }),
    trailingIcon: (_jsxs("div", Object.assign({ style: { display: 'flex', gap: '8px' } }, { children: [_jsx(ActionCrossIcon, { size: 12, color: "muted" }), _jsx(InterfaceCaretDownIcon, { size: 12, color: "muted" })] }))),
    disabled: true,
};
export const Error = Template.bind({});
Error.args = {
    trailingIcon: _jsx(ActionSearchIcon, { size: 12, color: "muted" }),
    errorText: 'error!!',
};
export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Label',
};
export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
    label: 'Label',
    required: true,
};
export const WithDescription = Template.bind({});
WithDescription.args = {
    label: 'Label',
    description: 'Description',
};
export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
    leadingIcon: _jsx(ActionSearchIcon, { size: 12, color: "muted" }),
    trailingIcon: _jsx(InterfaceCaretDownIcon, { size: 12, color: "muted" }),
};
export const WithManyIcon = Template.bind({});
WithManyIcon.args = {
    leadingIcon: _jsx(ActionSearchIcon, { size: 12, color: "muted" }),
    trailingIcon: (
    // 여기는 어떻게 하는게 좋을까요
    // 오른쪽에 2개의 아이콘이 들어갈 경우가있는데, 두 아이콘 사이의 간격은 항상 8px 이어야합니다.
    // 그런데 사용측에서 직접 8px을 넘겨줘야해요
    _jsxs("div", Object.assign({ style: { display: 'flex', gap: '8px' } }, { children: [_jsx(ActionCrossIcon, { size: 12, color: "muted" }), _jsx(InterfaceCaretDownIcon, { size: 12, color: "muted" })] }))),
};
