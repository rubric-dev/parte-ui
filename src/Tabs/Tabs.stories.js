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
import Tabs from './Tabs';
import { useState } from 'react';
import Tab from './Tab/Tab';
import ActionTickIcon from '../icons/Icons/ActionTickIcon';
import SidebarTab from './SidebarTab';
import { Box } from '../Layout';
export default {
    title: 'Components/Controls/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const SAMPLE_TABS = [
    { label: 'Tab 1', value: 'Tab 1' },
    { label: 'Tab 2', value: 'Tab 2' },
    { label: 'Tab 3', value: 'Tab 3' },
    { label: 'Tab 4', value: 'Tab 4' },
];
const Template = (_a) => {
    var { variant } = _a, args = __rest(_a, ["variant"]);
    const [selected, setSelected] = useState(SAMPLE_TABS[0]);
    return (_jsx(Tabs, Object.assign({}, args, { children: SAMPLE_TABS.map((option) => (_jsx(Tab, Object.assign({ onClick: () => setSelected(option), selected: selected.label === option.label, variant: variant }, { children: option.label }), option.label))) })));
};
const IconTemplate = (_a) => {
    var { variant } = _a, args = __rest(_a, ["variant"]);
    const [selected, setSelected] = useState(SAMPLE_TABS[0]);
    return (_jsx(Tabs, Object.assign({}, args, { children: SAMPLE_TABS.map((option) => {
            const active = selected.label === option.label;
            return (_jsx(Tab, Object.assign({ onClick: () => setSelected(option), selected: active, variant: variant, trailingIcon: active ? _jsx(ActionTickIcon, { size: 12 }) : undefined }, { children: option.label }), option.label));
        }) })));
};
export const Primary = Template.bind({});
Primary.args = {};
export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'Secondary',
};
export const IconTab = IconTemplate.bind({});
IconTab.args = {};
const SideBarTemplate = (_a) => {
    var { variant } = _a, args = __rest(_a, ["variant"]);
    const [selected, setSelected] = useState(SAMPLE_TABS[0]);
    return (_jsx(Box, { children: _jsx(Tabs, Object.assign({}, args, { children: SAMPLE_TABS.map((option) => {
                const active = selected.label === option.label;
                return (_jsx(SidebarTab, Object.assign({ onClick: () => setSelected(option), selected: active, variant: variant }, { children: option.label }), option.label));
            }) })) }));
};
export const SideBarTab = SideBarTemplate.bind({});
SideBarTab.args = {
    flexBasis: 200,
};
