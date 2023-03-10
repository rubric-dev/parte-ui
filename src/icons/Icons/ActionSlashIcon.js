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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2C9.54 2 9.15 2.31 9.04 2.73L6.05 12.69C6.02 12.79 6 12.89 6 13C6 13.55 6.45 14 7 14C7.46 14 7.85 13.69 7.96 13.27L10.95 3.31C10.98 3.21 11 3.11 11 3C11 2.45 10.55 2 10 2Z", fill: "currentcolor" }) })));
}
const ActionSlashIcon = convertIcon(Icon, 'action-slash');
export default ActionSlashIcon;
