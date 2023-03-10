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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.24999 10.26L5.71999 12.73L12.41 6.04001L9.94999 3.56001L3.24999 10.26ZM0.98999 14.99L4.84999 13.6L2.38999 11.16L0.98999 14.99ZM13.24 0.990005C12.76 0.990005 12.32 1.19001 12 1.50001L10.56 2.94001L13.03 5.41001L14.47 3.97001C14.79 3.65001 14.98 3.22001 14.98 2.73001C14.99 1.78001 14.21 0.990005 13.24 0.990005Z", fill: "currentcolor" }) })));
}
const ActionEditIcon = convertIcon(Icon, 'action-edit');
export default ActionEditIcon;