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
import Tab from './Tab';
import ActionLockIcon from '../../icons/Icons/ActionLockIcon';
export default {
    title: 'Components/Controls/Tabs/Tab',
    component: Tab,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Tab, Object.assign({}, args, { children: "Label" }));
};
export const Default = Template.bind({});
Default.args = {};
export const Selected = Template.bind({});
Selected.args = {
    selected: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
export const Icon = Template.bind({});
Icon.args = {
    trailingIcon: _jsx(ActionLockIcon, { size: 12 }),
};
export const IconDisabled = Template.bind({});
IconDisabled.args = {
    trailingIcon: _jsx(ActionLockIcon, { size: 12 }),
    disabled: true,
    variant: 'Primary',
};
