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
import { convertIcon } from '../component/Icon';
function Icon(_a) {
    var { size } = _a, rest = __rest(_a, ["size"]);
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 1H1C0.4 1 0 1.4 0 2V13C0 13.6 0.4 14 1 14H15C15.6 14 16 13.6 16 13V2C16 1.4 15.6 1 15 1ZM8 9H6V7H8V9ZM8 6H6V4H8V6ZM2 12V3H5V12H2ZM6 12V10H8V12H6ZM14 12H9V10H14V12ZM14 9H9V7H14V9ZM14 6H9V4H14V6Z", fill: "currentcolor" }) })));
}
const TablePanelTableIcon = convertIcon(Icon, 'table-panel-table');
export default TablePanelTableIcon;
