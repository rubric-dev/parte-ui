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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14H1C0.4 14 0 13.6 0 13V2C0 1.4 0.4 1 1 1ZM2 12H8V3H2V12ZM14 12H9V3H14V12ZM10 4H13V5H10V4ZM10 6H13V7H10V6ZM13 8H10V9H13V8ZM10 10H13V11H10V10Z", fill: "currentcolor" }) })));
}
const TablePanelStatsIcon = convertIcon(Icon, 'table-panel-stats');
export default TablePanelStatsIcon;
