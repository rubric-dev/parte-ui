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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 2C13 2 13.71 0.71 13 0L8.66 5.07L9.71 6.39L13 2ZM13.07 10C12.65 10 12.25 10.09 11.89 10.26L3.31 0C2.62 0.71 3.31 2 3.31 2L6.99 7.02L4.22 10.26C3.84 10.09 3.43 10 3 10C1.34 10 0 11.34 0 13C0 14.66 1.34 16 3 16C4.66 16 6 14.66 6 13C6 12.54 5.89 12.11 5.71 11.73L8.1 8.54L10.43 11.73C10.25 12.12 10.14 12.55 10.14 13C10.14 14.66 11.45 16 13.07 16C14.69 16 16 14.66 16 13C16 11.34 14.69 10 13.07 10ZM3 14C2.45 14 2 13.55 2 13C2 12.45 2.45 12 3 12C3.55 12 4 12.45 4 13C4 13.55 3.55 14 3 14ZM13.07 14C12.53 14 12.09 13.55 12.09 13C12.09 12.45 12.53 12 13.07 12C13.61 12 14.05 12.45 14.05 13C14.05 13.55 13.61 14 13.07 14Z", fill: "currentcolor" }) })));
}
const ActionCutIcon = convertIcon(Icon, 'action-cut');
export default ActionCutIcon;
