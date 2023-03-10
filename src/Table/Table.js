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
import { memo } from 'react';
import { Paragraph } from '../@foundations/Typography';
import { Dropdown } from '../Dropdown';
import { Box } from '../Layout';
import Menu from '../Menu';
import ActionFilterIcon from '../icons/Icons/ActionFilterIcon';
import InterfaceCaretDownIcon from '../icons/Icons/InterfaceCaretDownIcon';
import * as Styled from './Table.styled';
const Table = (_a) => {
    var { children, display = 'flex', flexDirection = 'column' } = _a, args = __rest(_a, ["children", "display", "flexDirection"]);
    return (_jsx(Styled.Table, Object.assign({ display: display, flexDirection: flexDirection }, args, { children: children })));
};
const HeaderContainer = (_a) => {
    var { children, display = 'flex', flexDirection = 'column' } = _a, args = __rest(_a, ["children", "display", "flexDirection"]);
    return (_jsx(Styled.HeaderContainer, Object.assign({ display: display, flexDirection: flexDirection }, args, { children: children })));
};
const Body = (_a) => {
    var { children, display = 'flex', flexDirection = 'column' } = _a, args = __rest(_a, ["children", "display", "flexDirection"]);
    return (_jsx(Styled.Body, Object.assign({ display: display, flexDirection: flexDirection }, args, { children: children })));
};
const HeaderRow = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return _jsx(Styled.HeaderRow, Object.assign({}, args, { children: children }));
};
const Row = (_a) => {
    var { children, onSelect } = _a, args = __rest(_a, ["children", "onSelect"]);
    return (_jsx(Styled.Row, Object.assign({ onClick: onSelect }, args, { children: children })));
};
export const HeaderCell = memo((_a) => {
    var { children, display = 'flex', alignItems = 'center', height = 48, padding = 8 } = _a, args = __rest(_a, ["children", "display", "alignItems", "height", "padding"]);
    return (_jsx(Styled.HeaderCell, Object.assign({ display: display, alignItems: alignItems, height: height, padding: padding }, args, { children: children })));
});
export const Cell = memo((_a) => {
    var { children, display = 'flex', alignItems = 'center', height = 64, padding = 8 } = _a, args = __rest(_a, ["children", "display", "alignItems", "height", "padding"]);
    return (_jsx(Styled.Cell, Object.assign({ display: display, alignItems: alignItems, height: height, padding: padding }, args, { children: children })));
});
export const TableFilterBar = ({ onClear, countInfo }) => {
    const countText = countInfo
        ? `${countInfo.currentCount}/${countInfo.totalCount} fields shown. `
        : '';
    return (_jsxs(Styled.TableFilterBar, { children: [_jsx(ActionFilterIcon, { size: 16 }), _jsxs(Paragraph, Object.assign({ size: 100, color: "N700" }, { children: [`Filter Aplied. ${countText}`, _jsx(Styled.ClearFilter, Object.assign({ type: "button", onClick: onClear }, { children: "Clear filter" }))] }))] }));
};
export const FilterHeader = ({ column, options, children, }) => {
    const filter = column.getFilterValue();
    const prevFilter = column.getFilterValue();
    const columnId = column.id;
    const renderOptions = options !== null && options !== void 0 ? options : Array.from(column.getFacetedUniqueValues().keys())
        .sort()
        .map((item) => ({
        label: item,
        value: item,
    }));
    return (_jsxs(Dropdown, { children: [_jsx(Dropdown.Trigger, { children: _jsxs(Box, Object.assign({ display: "flex", alignItems: "center", gap: 4, style: { cursor: 'pointer' } }, { children: [children !== null && children !== void 0 ? children : columnId, _jsx(InterfaceCaretDownIcon, { size: 16 })] })) }), _jsx(Dropdown.Menu, { children: ({ onClose }) => (_jsx(Menu, { children: _jsx(Menu.Group, Object.assign({ title: "Filter" }, { children: renderOptions.map(({ value, label }) => (_jsx(Menu.Row, Object.assign({ onSelect: () => {
                                column.setFilterValue(prevFilter === value ? undefined : value);
                                onClose === null || onClose === void 0 ? void 0 : onClose();
                            }, selected: value === filter }, { children: label }), label))) })) })) })] }));
};
Table.HeaderContainer = HeaderContainer;
Table.Body = Body;
Table.HeaderRow = HeaderRow;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;
export default Table;
