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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 7H9V5C9 4.45 8.55 4 8 4C7.45 4 7 4.45 7 5V7H5C4.45 7 4 7.45 4 8C4 8.55 4.45 9 5 9H7V11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11V9H11C11.55 9 12 8.55 12 8C12 7.45 11.55 7 11 7Z", fill: "currentcolor" }) })));
}
const ActionSmallPlusIcon = convertIcon(Icon, 'action-small-plus');
export default ActionSmallPlusIcon;
