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
import { jsx as _jsx } from "react/jsx-runtime";
import Toggle from './Toggle';
import { useState } from 'react';
export default {
    title: 'Components/Controls/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var { on: defaultOn } = _a, args = __rest(_a, ["on"]);
    const [on, setOn] = useState(defaultOn);
    return _jsx(Toggle, Object.assign({}, args, { on: on, onChange: setOn }));
};
export const Default = Template.bind({});
Default.args = {};
export const Enabled = Template.bind({});
Enabled.args = {
    on: true,
};
export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
    label: 'Toggle Button',
};
export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Toggle Button',
    disabled: true,
};
