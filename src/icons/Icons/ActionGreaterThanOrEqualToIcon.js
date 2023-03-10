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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.71267 3.95783C2.18368 3.79913 1.8835 3.24165 2.04219 2.71266C2.20089 2.18366 2.75837 1.88348 3.28737 2.04218L13.2874 5.04218C14.2376 5.32724 14.2376 6.67277 13.2874 6.95783L3.28737 9.95783C2.75837 10.1165 2.20089 9.81634 2.04219 9.28735C1.8835 8.75836 2.18368 8.20088 2.71267 8.04218L9.51992 6L2.71267 3.95783ZM3.00002 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H3.00002C2.44773 14 2.00002 13.5523 2.00002 13C2.00002 12.4477 2.44773 12 3.00002 12Z", fill: "currentcolor" }) })));
}
const ActionGreaterThanOrEqualToIcon = convertIcon(Icon, 'action-greater-than-equal-to');
export default ActionGreaterThanOrEqualToIcon;
