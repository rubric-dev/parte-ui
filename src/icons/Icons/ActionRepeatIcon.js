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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 5C10 5.55 10.45 6 11 6H15C15.55 6 16 5.55 16 5V1C16 0.45 15.55 0 15 0C14.45 0 14 0.45 14 1V2.74C12.54 1.07 10.4 0 8 0C3.58 0 0 3.58 0 8C0 12.06 3.02 15.4 6.94 15.92C6.96 15.92 6.98 15.93 7 15.93C7.33 15.97 7.66 16 8 16C12.42 16 16 12.42 16 8C16 7.45 15.55 7 15 7C14.45 7 14 7.45 14 8C14 11.31 11.31 14 8 14C7.29 14 6.63 13.85 6 13.62V13.63C3.67 12.81 2 10.61 2 8C2 4.69 4.69 2 8 2C9.77 2 11.36 2.78 12.46 4H11C10.45 4 10 4.45 10 5Z", fill: "currentcolor" }) })));
}
const ActionRepeatIcon = convertIcon(Icon, 'action-repeat');
export default ActionRepeatIcon;
