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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 6V4C6 2.9 5.1 2 4 2H3C1.9 2 1 2.9 1 4V6C1 7.1 1.9 8 3 8H4C5.1 8 6 7.1 6 6ZM3.5 6C3.22 6 3 5.78 3 5.5V4.5C3 4.22 3.22 4 3.5 4C3.78 4 4 4.22 4 4.5V5.5C4 5.78 3.78 6 3.5 6ZM13 8H12C10.9 8 10 8.9 10 10V12C10 13.1 10.9 14 12 14H13C14.1 14 15 13.1 15 12V10C15 8.9 14.1 8 13 8ZM13 11.5C13 11.78 12.78 12 12.5 12C12.22 12 12 11.78 12 11.5V10.5C12 10.22 12.22 10 12.5 10C12.78 10 13 10.22 13 10.5V11.5ZM12 3C12 2.45 11.55 2 11 2C10.63 2 10.31 2.2 10.13 2.5L4.14 12.48C4.05 12.63 4 12.81 4 13C4 13.55 4.45 14 5 14C5.37 14 5.69 13.8 5.87 13.5L11.86 3.52C11.95 3.37 12 3.19 12 3Z", fill: "currentcolor" }) })));
}
const ActionPercentageIcon = convertIcon(Icon, 'action-percentage');
export default ActionPercentageIcon;
