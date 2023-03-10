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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.6 3.3C6.1 3.1 5.6 3 5 3C2.2 3 0 5.2 0 8C0 10.8 2.2 13 5 13C5.6 13 6.1 12.9 6.6 12.7C5.3 11.6 4.5 9.9 4.5 8C4.5 6.1 5.3 4.4 6.6 3.3V3.3ZM8 4C6.8 4.9 6 6.4 6 8C6 9.6 6.8 11.1 8 12C9.2 11.1 10 9.7 10 8C10 6.3 9.2 4.9 8 4V4ZM11 3C10.4 3 9.9 3.1 9.4 3.3C10.7 4.5 11.5 6.2 11.5 8C11.5 9.8 10.7 11.6 9.4 12.7C9.9 12.9 10.4 13 11 13C13.8 13 16 10.8 16 8C16 5.2 13.8 3 11 3V3Z", fill: "currentcolor" }) })));
}
const ActionResolveIcon = convertIcon(Icon, 'action-resolve');
export default ActionResolveIcon;
