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
import Checkbox from './Checkbox';
import { Box } from '../Layout';
import { useState } from 'react';
export default {
    title: 'Components/Controls/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };
    return (_jsxs(Box, Object.assign({ display: "flex", gap: 12, flexDirection: "column" }, { children: [_jsx(Checkbox, Object.assign({}, args, { onChange: onChange, checked: checked })), _jsx(Checkbox, Object.assign({}, args, { disabled: true, onChange: onChange, checked: checked }))] })));
};
export const Default = Template.bind({});
Default.args = {
    label: 'TEST',
};
export const Indeterminate = Template.bind({});
Indeterminate.args = {
    label: 'TEST',
    indeterminate: true,
};
export const Checked = Template.bind({});
Checked.args = {
    label: 'TEST',
    checked: true,
};
