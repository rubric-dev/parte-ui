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
import RadioGroup from './RadioGroup';
import Radio from '../Radio/Radio';
import { useState } from 'react';
import { Box } from '../Layout';
export default {
    title: 'Components/Controls/RadioGroup',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    const onChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const [selectedValue, setSelectedValue] = useState('TEST');
    return (_jsx(RadioGroup, Object.assign({}, args, { onChange: onChange, value: selectedValue }, { children: _jsxs(Box, Object.assign({ display: "flex", gap: 10, flexDirection: "column" }, { children: [_jsx(Radio, { value: "TEST", label: "TEST" }), _jsx(Radio, { value: "TEST1", label: "TEST1" }), _jsx(Radio, { value: "TEST2", label: "TEST2" }), _jsx(Radio, { value: "TEST3", label: "TEST3" })] })) })));
};
export const Default = Template.bind({});
Default.args = {
    name: 'my',
};
export const Disabled = Template.bind({});
Disabled.args = {
    name: 'my',
    disabled: true,
};
