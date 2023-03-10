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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 10C14.72 10 14.47 10.11 14.29 10.29L12 12.59L10.71 11.3C10.53 11.11 10.28 11 10 11C9.45 11 9 11.45 9 12C9 12.28 9.11 12.53 9.29 12.71L11.29 14.71C11.47 14.89 11.72 15 12 15C12.28 15 12.53 14.89 12.71 14.71L15.71 11.71C15.89 11.53 16 11.28 16 11C16 10.45 15.55 10 15 10ZM12 2C12 1.45 11.55 1 11 1H1C0.45 1 0 1.45 0 2C0 2.28 0.11 2.53 0.29 2.71L4 6.41V12C4 12.55 4.45 13 5 13C5.28 13 5.53 12.89 5.71 12.71L7.71 10.71C7.89 10.53 8 10.28 8 10V6.41L11.71 2.7C11.89 2.53 12 2.28 12 2Z", fill: "currentcolor" }) })));
}
const ActionFilterKeepIcon = convertIcon(Icon, 'action-filter-keep');
export default ActionFilterKeepIcon;
