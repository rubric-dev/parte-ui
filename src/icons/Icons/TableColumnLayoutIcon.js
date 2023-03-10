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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 1H1C0.45 1 0 1.45 0 2V14C0 14.55 0.45 15 1 15H15C15.55 15 16 14.55 16 14V2C16 1.45 15.55 1 15 1ZM4 13H2V3H4V13ZM7 13H5V3H7V13ZM14 13H8V3H14V13Z", fill: "currentcolor" }) })));
}
const TableColumnLayoutIcon = convertIcon(Icon, 'table-column-layout');
export default TableColumnLayoutIcon;
