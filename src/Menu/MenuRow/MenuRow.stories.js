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
import MenuRow from './MenuRow';
import ActionChatIcon from '../../icons/Icons/ActionChatIcon';
import { useState } from 'react';
export default {
    title: 'Components/Menu/MenuRow',
    component: MenuRow,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(MenuRow, Object.assign({}, args, { children: "Menu Row" }));
};
const ClickableTemplate = (_a) => {
    var args = __rest(_a, []);
    const [selected, setSeleted] = useState(false);
    return (_jsx(MenuRow, Object.assign({ selected: selected, onSelect: () => setSeleted((prev) => !prev) }, args, { children: "Menu Row" })));
};
export const Default = Template.bind({});
Default.args = {
    selected: false,
};
export const Icon = Template.bind({});
Icon.args = {
    leadingIcon: _jsx(ActionChatIcon, { size: 16 }),
};
export const Title = Template.bind({});
Title.args = {
    type: 'title',
};
export const Checkbox = Template.bind({});
Checkbox.args = {
    type: 'checkbox',
    selected: false,
};
export const Clickable = ClickableTemplate.bind({});
