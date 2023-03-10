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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 15C16 14.72 15.88 14.48 15.69 14.31L15.71 14.29L12.59 11.17L16 10.33L7.95 7.47C7.98 7.38 8 7.3 8 7.2V2C8 1.45 7.55 1 7 1H3C3 0.45 2.55 0 2 0C1.45 0 1 0.45 1 1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3V7C1 7.55 1.45 8 2 8H7.2C7.3 8 7.38 7.98 7.47 7.95L10.33 16L11.18 12.59L14.3 15.71L14.32 15.69C14.48 15.88 14.72 16 15 16C15.04 16 15.07 15.98 15.1 15.98C15.13 15.98 15.16 16 15.2 16C15.64 16 16 15.64 16 15.2C16 15.16 15.98 15.13 15.98 15.1C15.98 15.07 16 15.04 16 15ZM6 6H3V3H6V6Z", fill: "currentcolor" }) })));
}
const ActionSelectIcon = convertIcon(Icon, 'action-select');
export default ActionSelectIcon;
