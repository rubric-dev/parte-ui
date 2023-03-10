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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 3C10.45 3 9.93 3.09 9.43 3.26C10.7 4.44 11.5 6.13 11.5 8C11.5 9.87 10.7 11.56 9.43 12.74C9.93 12.91 10.45 13 11 13C13.76 13 16 10.76 16 8C16 5.24 13.76 3 11 3ZM9.78 9.38C9.81 9.29 9.84 9.2 9.87 9.11C9.95 8.75 10 8.38 10 8C10 7.62 9.95 7.25 9.87 6.89C9.84 6.8 9.81 6.71 9.78 6.62C9.7 6.35 9.61 6.08 9.49 5.83C9.45 5.76 9.41 5.69 9.37 5.62C9.23 5.35 9.06 5.1 8.86 4.86C8.84 4.83 8.81 4.79 8.78 4.76C8.54 4.49 8.29 4.24 8 4.02V4.02V4.02C7.57 3.7 7.08 3.44 6.55 3.27L6.56 3.26C6.46 3.23 6.36 3.21 6.26 3.18C6.14 3.15 6.03 3.11 5.9 3.09C5.61 3.04 5.31 3 5 3C2.24 3 0 5.24 0 8C0 10.76 2.24 13 5 13C5.31 13 5.61 12.96 5.9 12.91C6.02 12.89 6.14 12.85 6.26 12.82C6.36 12.79 6.47 12.78 6.56 12.74L6.55 12.73C7.43 12.44 8.19 11.93 8.77 11.24C8.8 11.21 8.83 11.17 8.86 11.14C9.05 10.9 9.22 10.65 9.37 10.38C9.41 10.31 9.45 10.24 9.48 10.17C9.61 9.92 9.71 9.65 9.78 9.38Z", fill: "currentcolor" }) })));
}
const ActionUnresolveIcon = convertIcon(Icon, 'action-unresolve');
export default ActionUnresolveIcon;