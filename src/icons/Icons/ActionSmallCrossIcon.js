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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.41 8L11.7 5.71C11.89 5.53 12 5.28 12 5C12 4.45 11.55 4 11 4C10.72 4 10.47 4.11 10.29 4.29L8 6.59L5.71 4.29C5.53 4.11 5.28 4 5 4C4.45 4 4 4.45 4 5C4 5.28 4.11 5.53 4.29 5.71L6.59 8L4.3 10.29C4.11 10.47 4 10.72 4 11C4 11.55 4.45 12 5 12C5.28 12 5.53 11.89 5.71 11.71L8 9.41L10.29 11.7C10.47 11.89 10.72 12 11 12C11.55 12 12 11.55 12 11C12 10.72 11.89 10.47 11.71 10.29L9.41 8Z", fill: "currentcolor" }) })));
}
const ActionSmallCrossIcon = convertIcon(Icon, 'action-small-cross');
export default ActionSmallCrossIcon;
