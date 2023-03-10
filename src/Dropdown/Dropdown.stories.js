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
import { useState } from 'react';
import { Button } from '../Button';
import ActionChatIcon from '../icons/Icons/ActionChatIcon';
import Dropdown from './Dropdown';
import DropdownList from './DropdownList';
const OPTIONS = [
    {
        label: 'label1',
        value: 'value1',
    },
    {
        label: 'label2',
        value: 'value2',
        disabled: true,
        icon: _jsx(ActionChatIcon, { size: 12 }),
    },
    {
        label: 'label3',
        value: 'value3',
        icon: _jsx(ActionChatIcon, { size: 12 }),
    },
];
const GROUP_OPTIONS = [
    {
        groupName: '선민호',
        options: [
            {
                label: 'label1-1',
                value: 'value1-1',
            },
            {
                label: 'label1-2',
                value: 'value1-2',
                disabled: true,
                icon: _jsx(ActionChatIcon, { size: 12 }),
            },
            {
                label: 'label1-3',
                value: 'value1-3',
                icon: _jsx(ActionChatIcon, { size: 12 }),
            },
        ],
    },
    {
        groupName: '서솔민',
        options: [
            {
                label: 'label2-1',
                value: 'value2-1',
            },
            {
                label: 'label2-2',
                value: 'value2-2',
                disabled: true,
                icon: _jsx(ActionChatIcon, { size: 12 }),
            },
            {
                label: 'label2-3',
                value: 'value2-3',
                icon: _jsx(ActionChatIcon, { size: 12 }),
            },
        ],
    },
    {
        groupName: '김대균',
        options: [
            {
                label: 'label3-1',
                value: 'value3-1',
            },
            {
                label: 'label3-2',
                value: 'value3-2',
                disabled: true,
                icon: _jsx(ActionChatIcon, { size: 12 }),
            },
            {
                label: 'label3-3',
                value: 'value3-3',
                icon: _jsx(ActionChatIcon, { size: 12 }),
            },
        ],
    },
];
export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    const [selectValue, setSelectValue] = useState({
        label: 'label3',
        value: 'value3',
    });
    const onSelect = (value) => {
        setSelectValue(value);
    };
    return (_jsx("div", Object.assign({ style: {
            height: '1600px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            // alignItems: 'flex-end',
        } }, { children: _jsxs(Dropdown, Object.assign({}, args, { children: [_jsx(Dropdown.Trigger, { children: _jsx(Button, Object.assign({ variant: "primary" }, { children: selectValue.label })) }), _jsx(Dropdown.Menu, { children: _jsx(DropdownList, { options: OPTIONS, value: selectValue, onSelect: onSelect }) })] })) })));
};
const GroupedTemplate = (_a) => {
    var _b;
    var { isSearchable } = _a, args = __rest(_a, ["isSearchable"]);
    const [selectValue, setSelectValue] = useState();
    const onSelect = (value) => {
        setSelectValue(value);
    };
    return (_jsx("div", Object.assign({ style: {
            height: '1600px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
        } }, { children: _jsxs(Dropdown, Object.assign({}, args, { children: [_jsx(Dropdown.Trigger, { children: _jsx(Button, Object.assign({ variant: "primary" }, { children: (_b = selectValue === null || selectValue === void 0 ? void 0 : selectValue.label) !== null && _b !== void 0 ? _b : 'empty' })) }), _jsx(Dropdown.Menu, { children: _jsx(DropdownList, { options: GROUP_OPTIONS, value: selectValue, onSelect: onSelect, isSearchable: isSearchable }) })] })) })));
};
const MultiTemplate = (_a) => {
    var { closeOnSelect } = _a, args = __rest(_a, ["closeOnSelect"]);
    const [selectValue, setSelectValue] = useState();
    return (_jsx("div", Object.assign({ style: {
            height: '1600px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
        } }, { children: _jsxs(Dropdown, Object.assign({}, args, { children: [_jsx(Dropdown.Trigger, { children: _jsx(Button, Object.assign({ variant: "primary" }, { children: (selectValue === null || selectValue === void 0 ? void 0 : selectValue.map(({ label }) => label).join(', ')) || 'empty' })) }), _jsx(Dropdown.Menu, { children: _jsx(DropdownList, { options: GROUP_OPTIONS, value: selectValue, isMulti: true, onChange: (options) => {
                            if ('length' in options) {
                                setSelectValue(options);
                            }
                        }, isSearchable: true, closeOnSelect: closeOnSelect }) })] })) })));
};
export const Default = Template.bind({});
Default.args = {};
export const Portal = Template.bind({});
Portal.args = {
    usePortal: true,
};
export const Grouped = GroupedTemplate.bind({});
export const GroupedSearch = GroupedTemplate.bind({});
Grouped.args = {};
GroupedSearch.args = { isSearchable: true };
export const MultiSelect = MultiTemplate.bind({});
MultiSelect.args = { closeOnSelect: false };
