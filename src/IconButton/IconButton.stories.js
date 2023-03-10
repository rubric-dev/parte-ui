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
import IconButton from './IconButton';
import TableThIcon from '../icons/Icons/TableThIcon';
export default {
    title: 'Components/Buttons/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(IconButton, Object.assign({}, args));
};
export const Default = Template.bind({});
Default.args = {
    variant: 'primary',
    size: 32,
    Icon: _jsx(TableThIcon, {}),
};
export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    Icon: _jsx(TableThIcon, {}),
    size: 32,
};
export const Minimal = Template.bind({});
Minimal.args = {
    variant: 'minimal',
    Icon: _jsx(TableThIcon, {}),
    size: 32,
};
export const Error = Template.bind({});
Error.args = {
    variant: 'error',
    Icon: _jsx(TableThIcon, {}),
    size: 32,
};
