import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Menu from './Menu';
import ActionChatIcon from '../icons/Icons/ActionChatIcon';
import ActionRefreshIcon from '../icons/Icons/ActionRefreshIcon';
import ActionCrossIcon from '../icons/Icons/ActionCrossIcon';
import { useState } from 'react';
export default {
    title: 'Components/Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = () => {
    return (_jsxs(Menu, { children: [_jsxs(Menu.Group, Object.assign({ title: "TITLE" }, { children: [_jsx(Menu.Row, Object.assign({ leadingIcon: _jsx(ActionChatIcon, { size: 16 }) }, { children: "Label 1" })), _jsx(Menu.Row, Object.assign({ leadingIcon: _jsx(ActionChatIcon, { size: 16 }) }, { children: "Label 2" })), _jsx(Menu.Row, Object.assign({ leadingIcon: _jsx(ActionRefreshIcon, { size: 16 }) }, { children: "Label 3" }))] })), _jsx(Menu.Divider, {}), _jsx(Menu.Group, Object.assign({ title: "TITLE 2" }, { children: _jsx(Menu.Row, Object.assign({ leadingIcon: _jsx(ActionCrossIcon, { size: 16 }) }, { children: "Label" })) }))] }));
};
const menuOptions = [
    { label: 'label1', value: 'label1' },
    { label: 'label2', value: 'label2' },
    { label: 'label3', value: 'label3' },
];
const SelectableTemplate = () => {
    const [selected, setSelected] = useState('');
    return (_jsxs(Menu, { children: [_jsx(Menu.Group, Object.assign({ title: "TITLE" }, { children: menuOptions.map(({ label, value }) => (_jsx(Menu.Row, Object.assign({ onSelect: () => setSelected(value), selected: selected === value, leadingIcon: _jsx(ActionChatIcon, { size: 16 }) }, { children: label }), label))) })), _jsx(Menu.Divider, {}), _jsx(Menu.Group, Object.assign({ title: "TITLE 2" }, { children: _jsx(Menu.Row, Object.assign({ leadingIcon: _jsx(ActionCrossIcon, { size: 16 }) }, { children: "Delete" })) }))] }));
};
const CheckBoxTemplate = () => {
    const [selected, setSelected] = useState([]);
    return (_jsx(Menu, { children: _jsx(Menu.Group, Object.assign({ title: "TITLE" }, { children: menuOptions.map(({ label, value }) => {
                const included = selected.includes(value);
                return (_jsx(Menu.Row, Object.assign({ type: "checkbox", onSelect: () => {
                        setSelected((prev) => included
                            ? prev.filter((item) => item !== value)
                            : [...prev, value]);
                    }, selected: included }, { children: label }), label));
            }) })) }));
};
export const Default = Template.bind({});
export const Selectable = SelectableTemplate.bind({});
export const CheckBox = CheckBoxTemplate.bind({});
