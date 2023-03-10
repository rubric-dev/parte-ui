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
import DropdownList from './DropdownList';
export default {
    title: 'Components/Dropdown/DropdownList',
    component: DropdownList,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(DropdownList, Object.assign({}, args));
};
const OPTION = [
    {
        label: 'label1-1',
        value: 'value1-1',
    },
    {
        label: 'label1-2',
        value: 'value1-2',
    },
    {
        label: 'label1-3',
        value: 'value1-3',
    },
];
const createOption = (groupNames) => {
    return groupNames.map((gn, index) => {
        return {
            groupName: gn,
            options: groupNames.map((x, xindex) => {
                return { label: `${index}-${xindex}`, value: `${index}-${xindex}` };
            }),
        };
    });
};
export const Default = Template.bind({});
Default.args = {
    options: OPTION,
    value: {
        label: 'label1-2',
        value: 'value1-2',
    },
};
export const GroupOptions = Template.bind({});
GroupOptions.args = {
    options: createOption(['tjthfa', 'asd', 'rff']),
    isSearchable: true,
};
