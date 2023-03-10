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
import TagInput from './TagInput';
import ActionCrossIcon from '../icons/Icons/ActionCrossIcon';
import InterfaceCaretDownIcon from '../icons/Icons/InterfaceCaretDownIcon';
import { useState } from 'react';
export default {
    title: 'Components/Forms/TagInput',
    component: TagInput,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const OPTION_LIST = [
    { label: 'label1', value: '1', status: 'normal' },
    { label: 'label2', value: '2', status: 'error' },
    { label: 'label3', value: '3', status: 'disabled' },
];
const Template = (_a) => {
    var args = __rest(_a, []);
    const [values, setValues] = useState(OPTION_LIST);
    const onAdd = (label) => {
        setValues((props) => [...props, { label, value: label, status: 'normal' }]);
    };
    const onRemove = (value) => {
        const filteredList = values.filter((option) => option.value !== value);
        setValues(filteredList);
    };
    return (_jsx(TagInput, Object.assign({}, args, { trailingIcon: _jsxs("div", Object.assign({ style: { display: 'flex', gap: '8px' } }, { children: [_jsx(ActionCrossIcon, { size: 12, color: "muted", onClick: () => setValues([]) }), _jsx(InterfaceCaretDownIcon, { size: 12, color: "muted" })] })), placeholder: "Placeholder", values: values, onRemove: onRemove, onAdd: onAdd, required: true })));
};
export const Default = Template.bind({});
Default.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
