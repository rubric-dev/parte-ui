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
import Radio from './Radio';
export default {
    title: 'Components/Controls/RadioGroup/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Radio, Object.assign({}, args));
};
export const Default = Template.bind({});
Default.args = {
    label: 'TEST',
    value: 'TEST',
    disabled: false,
};
