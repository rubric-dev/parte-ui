import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MenuOptionsGroup from './MenuOptionsGroup';
import Menu from '../Menu';
import { MenuDivider } from '../MenuDivider';
import { useState } from 'react';
export default {
    title: 'Components/Menu/MenuOptionsGroup',
    component: MenuOptionsGroup,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = () => {
    const [selectedOrder, setSelectedOrder] = useState('asc');
    const [selectedField, setSelectedField] = useState('email');
    return (_jsxs(Menu, { children: [_jsx(MenuOptionsGroup, { title: "Order", options: [
                    { label: 'Ascending', value: 'asc' },
                    { label: 'Descending', value: 'desc' },
                ], selected: selectedOrder, onChange: (selected) => setSelectedOrder(selected) }), _jsx(MenuDivider, {}), _jsx(MenuOptionsGroup, { title: "Show", options: [
                    { label: 'Email', value: 'email' },
                    { label: 'Phone', value: 'phone' },
                    { label: 'State', value: 'state' },
                    { label: 'Country', value: 'country' },
                    { label: 'Type', value: 'type' },
                ], selected: selectedField, onChange: (selected) => setSelectedField(selected) })] }));
};
export const Default = Template.bind({});
Default.args = {
    title: 'title',
};
