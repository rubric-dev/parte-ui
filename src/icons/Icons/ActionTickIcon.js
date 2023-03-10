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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 3C13.72 3 13.47 3.11 13.29 3.29L6 10.59L2.71 7.29C2.53 7.11 2.28 7 2 7C1.45 7 1 7.45 1 8C1 8.28 1.11 8.53 1.29 8.71L5.29 12.71C5.47 12.89 5.72 13 6 13C6.28 13 6.53 12.89 6.71 12.71L14.71 4.71C14.89 4.53 15 4.28 15 4C15 3.45 14.55 3 14 3Z", fill: "currentcolor" }) })));
}
const ActionTickIcon = convertIcon(Icon, 'action-tick');
export default ActionTickIcon;
