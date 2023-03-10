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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.39 1C8.89 1.5 8.99 2.48 9.54 3.53L4.38 7.54C2.85 6.5 1.52 6.07 1 6.59L4.5 10.09C4.48 10.11 3.1 12.89 3.1 12.89L5.9 11.49L9.4 14.99C9.93 14.46 9.5 13.13 8.45 11.61L12.47 6.45C13.51 7 14.48 7.1 14.98 6.59L9.39 1Z", fill: "currentcolor" }) })));
}
const ActionUnpinIcon = convertIcon(Icon, 'action-upin');
export default ActionUnpinIcon;
