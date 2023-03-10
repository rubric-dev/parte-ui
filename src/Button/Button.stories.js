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
import Button from './Button';
export default {
    title: 'Components/Buttons/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Button, Object.assign({}, args, { children: "button" }));
};
export const Default = Template.bind({});
Default.args = {
    variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
};
export const Minimal = Template.bind({});
Minimal.args = {
    variant: 'minimal',
};
export const Error = Template.bind({});
Error.args = {
    variant: 'error',
};
