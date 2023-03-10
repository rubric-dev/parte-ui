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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 5C6 5.55 5.55 6 5 6H1C0.45 6 0 5.55 0 5V1C0 0.45 0.45 0 1 0C1.55 0 2 0.45 2 1V2.74C3.46 1.07 5.6 0 8 0C12.42 0 16 3.58 16 8C16 12.06 12.98 15.4 9.06 15.92C9.04 15.92 9.02 15.93 9 15.93C8.67 15.97 8.34 16 8 16C3.58 16 0 12.42 0 8C0 7.45 0.45 7 1 7C1.55 7 2 7.45 2 8C2 11.31 4.69 14 8 14C8.71 14 9.37 13.85 10 13.62V13.63C12.33 12.81 14 10.61 14 8C14 4.69 11.31 2 8 2C6.23 2 4.64 2.78 3.54 4H5C5.55 4 6 4.45 6 5Z", fill: "currentcolor" }) })));
}
const ActionResetIcon = convertIcon(Icon, 'action-reset');
export default ActionResetIcon;
