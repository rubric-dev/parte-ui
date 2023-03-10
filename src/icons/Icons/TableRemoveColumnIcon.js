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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 0H4C3.45 0 3 0.45 3 1V4H5V2H8V14H5V12H3V15C3 15.55 3.45 16 4 16H14C14.55 16 15 15.55 15 15V1C15 0.45 14.55 0 14 0ZM13 14H10V2H13V14ZM4.29 10.71C4.47 10.89 4.72 11 5 11C5.55 11 6 10.55 6 10C6 9.72 5.89 9.47 5.71 9.29L4.41 8L5.7 6.71C5.89 6.53 6 6.28 6 6C6 5.45 5.55 5 5 5C4.72 5 4.47 5.11 4.29 5.29L3 6.59L1.71 5.29C1.53 5.11 1.28 5 1 5C0.45 5 0 5.45 0 6C0 6.28 0.11 6.53 0.29 6.71L1.59 8L0.29 9.29C0.11 9.47 0 9.72 0 10C0 10.55 0.45 11 1 11C1.28 11 1.53 10.89 1.71 10.71L3 9.41L4.29 10.71Z", fill: "currentcolor" }) })));
}
const TableRemoveColumnIcon = convertIcon(Icon, 'table-remove-column');
export default TableRemoveColumnIcon;
