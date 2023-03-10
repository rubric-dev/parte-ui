import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, useReactTable, } from '@tanstack/react-table';
import { Fragment, useCallback, useState } from 'react';
import Table, { TableFilterBar } from './Table';
const TableTemplate = ({ data, columns, enableRowSelection, selectable, selectedRowId, onSelect, sticky, }) => {
    const [columnFilters, setColumnFilters] = useState([]);
    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        enableRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFilteredRowModel: getFilteredRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    });
    const onClear = useCallback(() => setColumnFilters([]), []);
    const totalCount = data.length;
    const currentCount = table.getFilteredRowModel().rows.length;
    const countInfo = {
        totalCount,
        currentCount,
    };
    return (_jsxs(Table, { children: [_jsxs(Table.HeaderContainer, Object.assign({ sticky: sticky }, { children: [columnFilters.length > 0 && (_jsx(TableFilterBar, { onClear: onClear, countInfo: countInfo })), table.getHeaderGroups().map((headerGroup) => (_jsx(Table.HeaderRow, { children: headerGroup.headers.map((header) => (_jsx(Fragment, { children: header.isPlaceholder
                                ? null
                                : flexRender(header.column.columnDef.header, header.getContext()) }, header.id))) }, headerGroup.id)))] })), _jsx(Table.Body, { children: table.getRowModel().rows.map((row) => (_jsx(Table.Row, Object.assign({ selectable: selectable, onSelect: () => onSelect === null || onSelect === void 0 ? void 0 : onSelect(row.id), selected: row.id === selectedRowId }, { children: row.getVisibleCells().map((cell) => (_jsx(Fragment, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }), row.id))) })] }));
};
export default TableTemplate;
