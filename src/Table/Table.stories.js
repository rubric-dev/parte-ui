import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../@foundations/Typography';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Checkbox from '../Checkbox';
import { Dropdown } from '../Dropdown';
import IconButton from '../IconButton';
import Link from '../Link';
import Menu from '../Menu';
import ActionChatIcon from '../icons/Icons/ActionChatIcon';
import InterfaceMoreIcon from '../icons/Icons/InterfaceMoreIcon';
import toaster from '../Toaster';
import Toggle from '../Toggle';
import { Cell, FilterHeader, HeaderCell } from './Table';
import TableTemplate from './TableTemplate';
const MOCK_USERS = [
    {
        name: 'Minho sun',
        type: 'admin',
        position: 'ERP PM',
        bio: 'google.com',
        active: true,
    },
    {
        name: 'Solmin seo',
        type: 'manager',
        position: 'HR Hero',
        bio: 'github.com',
        active: false,
    },
    {
        name: 'Dorothy',
        type: 'user',
        position: 'mukbang youtuber',
        bio: 'naver.com',
        active: true,
    },
    {
        name: 'June kim',
        type: 'user',
        position: 'Backend developer',
        bio: 'mysql.com',
        active: false,
    },
    {
        name: 'Changhee seo',
        type: 'manager',
        position: 'One manned design',
        bio: 'figma.com',
        active: true,
    },
];
const generateUsers = (times) => Array.from({ length: times })
    .map(() => MOCK_USERS)
    .flat();
const initialDatas = generateUsers(1);
const manyDatas = generateUsers(5);
export default {
    title: 'Components/Table',
    component: TableTemplate,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const getBadgeColorByType = (type) => {
    switch (type) {
        case 'admin':
            return 'BLUE';
        case 'manager':
            return 'GREEN';
        case 'user':
        default:
            return 'ORANGE';
    }
};
const columnHelper = createColumnHelper();
const defaultColumns = [
    columnHelper.display({
        id: 'select',
        header: ({ table }) => (_jsx(HeaderCell, Object.assign({ width: 50 }, { children: _jsx(Checkbox, { checked: table.getIsAllRowsSelected(), indeterminate: table.getIsSomeRowsSelected(), onChange: table.getToggleAllRowsSelectedHandler() }) }))),
        cell: ({ row }) => {
            return (_jsx(Cell, Object.assign({ display: "flex", alignItems: "center", gap: 8, width: 50 }, { children: _jsx(Checkbox, { checked: row.getIsSelected(), disabled: !row.getCanSelect(), indeterminate: row.getIsSomeSelected(), onChange: row.getToggleSelectedHandler() }) })));
        },
    }),
    columnHelper.accessor('name', {
        header: () => _jsx(HeaderCell, Object.assign({ flex: "2" }, { children: "Name" })),
        cell: (info) => {
            const { type, name } = info.row.original;
            return (_jsxs(Cell, Object.assign({ display: "flex", alignItems: "center", gap: 8, flex: "2" }, { children: [_jsx(Avatar, { avatarColor: getBadgeColorByType(type), name: name }), _jsx(Heading, Object.assign({ size: 300 }, { children: name }))] })));
        },
    }),
    columnHelper.accessor('type', {
        header: ({ column }) => {
            return (_jsx(HeaderCell, Object.assign({ flex: "1" }, { children: _jsx(FilterHeader, { column: column }) })));
        },
        cell: (info) => {
            const type = info.getValue();
            return (_jsx(Cell, Object.assign({ flex: "1" }, { children: _jsx(Badge, { badgeColor: getBadgeColorByType(type), text: info.getValue() }) })));
        },
    }),
    columnHelper.accessor('position', {
        header: () => _jsx(HeaderCell, Object.assign({ flex: "2" }, { children: "Position" })),
        cell: (info) => _jsx(Cell, Object.assign({ flex: "2" }, { children: info.getValue() })),
    }),
    columnHelper.accessor('bio', {
        header: () => _jsx(HeaderCell, Object.assign({ flex: "1" }, { children: "Bio" })),
        cell: (info) => {
            const link = info.getValue();
            return (_jsx(Cell, Object.assign({ flex: "1" }, { children: _jsx(Link, Object.assign({ href: `https://${link}`, target: "_blank", size: 300 }, { children: link })) })));
        },
    }),
    columnHelper.display({
        id: 'icon',
        header: () => (_jsx(HeaderCell, Object.assign({ width: 60, display: "flex", justifyContent: "center" }, { children: "Icon" }))),
        cell: (info) => {
            const { name } = info.row.original;
            const onClick = () => {
                toaster.notify({
                    title: '채팅',
                    status: 'info',
                    description: `${name}와 채팅하기`,
                });
            };
            return (_jsx(Cell, Object.assign({ width: 60, display: "flex", justifyContent: "center" }, { children: _jsx(IconButton, { variant: "minimal", onClick: onClick, size: 32, Icon: _jsx(ActionChatIcon, { size: 16 }) }) })));
        },
    }),
    columnHelper.accessor('active', {
        header: () => _jsx(HeaderCell, Object.assign({ width: 50 }, { children: "Active" })),
        cell: (info) => {
            const [on, setOn] = useState(!!info.getValue());
            return (_jsx(Cell, Object.assign({ width: 50 }, { children: _jsx(Toggle, { on: on, onChange: () => setOn((prev) => !prev) }) })));
        },
    }),
    columnHelper.display({
        id: 'menu',
        header: () => _jsx(HeaderCell, { width: 50 }),
        cell: () => {
            return (_jsx(Cell, Object.assign({ width: 50 }, { children: _jsxs(Dropdown, Object.assign({ usePortal: true }, { children: [_jsx(Dropdown.Trigger, { children: _jsx(IconButton, { variant: "minimal", size: 32, Icon: _jsx(InterfaceMoreIcon, { size: 12 }) }) }), _jsx(Dropdown.Menu, { children: _jsxs(Menu, { children: [_jsxs(Menu.Group, Object.assign({ title: "Action" }, { children: [_jsx(Menu.Row, { children: "\uCC44\uD305" }), _jsx(Menu.Row, { children: "\uC0C8\uB85C\uACE0\uCE68" })] })), _jsx(Menu.Divider, {}), _jsx(Menu.Group, Object.assign({ title: "Delete" }, { children: _jsx(Menu.Row, { children: "\uC0AD\uC81C" }) }))] }) })] })) })));
        },
    }),
];
const Template = ({ enableRowSelection, }) => {
    const [data] = useState(initialDatas);
    return (_jsx(TableTemplate, { data: data, columns: defaultColumns, enableRowSelection: enableRowSelection }));
};
const RowSelectTemplate = () => {
    const [data] = useState(initialDatas);
    const [selectedRowId, setSelectedRowId] = useState();
    return (_jsx(TableTemplate, { data: data, columns: defaultColumns.slice(1), selectable: true, selectedRowId: selectedRowId, onSelect: (rowId) => setSelectedRowId(rowId) }));
};
const ScrollContainer = styled.div `
  height: 600px;
`;
const ScrollTableTemplate = ({ sticky }) => {
    const [data] = useState(manyDatas);
    return (_jsx(ScrollContainer, { children: _jsx(TableTemplate, { data: data, columns: defaultColumns, enableRowSelection: true, sticky: sticky }) }));
};
export const Default = Template.bind({});
Default.args = {
    enableRowSelection: true,
};
export const RowSelect = RowSelectTemplate.bind({});
export const ScrollTable = ScrollTableTemplate.bind({});
ScrollTable.args = {
    sticky: true,
};
