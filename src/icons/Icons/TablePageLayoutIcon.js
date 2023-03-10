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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 0.949951H1C0.45 0.949951 0 1.39995 0 1.94995V13.95C0 14.5 0.45 14.95 1 14.95H15C15.55 14.95 16 14.5 16 13.95V1.94995C16 1.39995 15.55 0.949951 15 0.949951ZM6 12.95H2V6.94995H6V12.95ZM14 12.95H7V6.94995H14V12.95ZM14 5.94995H2V2.94995H14V5.94995Z", fill: "currentcolor" }) })));
}
const TablePageLayoutIcon = convertIcon(Icon, 'table-page-layout');
export default TablePageLayoutIcon;
