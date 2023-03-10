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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 3.5L5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 4.99485L3.5 3.5ZM10.8 10.7963L12 8L13.2 10.7963L16 12L13.2 13.1931L12 16L10.8 13.1931L8 11.9959L10.8 10.7963Z", fill: "currentcolor" }) })));
}
const ActionCleanIcon = convertIcon(Icon, 'action-clean');
export default ActionCleanIcon;
