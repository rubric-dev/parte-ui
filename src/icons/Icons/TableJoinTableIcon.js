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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 5H12V2C12 1.45 11.55 1 11 1H1C0.45 1 0 1.45 0 2V10C0 10.55 0.45 11 1 11H4V14C4 14.55 4.45 15 5 15H15C15.55 15 16 14.55 16 14V6C16 5.45 15.55 5 15 5ZM10 4V6H6V4H10ZM10 10H6V7H10V10ZM2 4H5V6H2V4ZM2 9V7H5V9H2ZM6 13V11H10V13H6ZM14 13H11V11H14V13ZM14 10H11V8H14V10Z", fill: "currentcolor" }) })));
}
const TableJoinTableIcon = convertIcon(Icon, 'table-join-table');
export default TableJoinTableIcon;
