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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.96 7H12V3.95C12 1.77 10.21 0 8 0C5.79 0 4 1.77 4 3.95V7H1.96C1.41 7 1 7.35 1 7.9V14.81C1 15.35 1.41 16 1.96 16H13.96C14.51 16 15 15.35 15 14.81V7.9C15 7.35 14.51 7 13.96 7ZM6 7V3.95C6 2.86 6.9 1.98 8 1.98C9.1 1.98 10 2.86 10 3.95V7H6Z", fill: "currentcolor" }) })));
}
const ActionLockIcon = convertIcon(Icon, 'action-lock');
export default ActionLockIcon;
