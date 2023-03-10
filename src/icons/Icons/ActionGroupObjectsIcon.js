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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 6C3.9 6 3 6.9 3 8C3 9.1 3.9 10 5 10C6.1 10 7 9.1 7 8C7 6.9 6.1 6 5 6ZM11 3H5C2.24 3 0 5.24 0 8C0 10.76 2.24 13 5 13H11C13.76 13 16 10.76 16 8C16 5.24 13.76 3 11 3ZM11 12H5C2.79 12 1 10.21 1 8C1 5.79 2.79 4 5 4H11C13.21 4 15 5.79 15 8C15 10.21 13.21 12 11 12ZM11 6C9.9 6 9 6.9 9 8C9 9.1 9.9 10 11 10C12.1 10 13 9.1 13 8C13 6.9 12.1 6 11 6Z", fill: "currentcolor" }) })));
}
const ActionGroupObjectsIcon = convertIcon(Icon, 'action-group-objects');
export default ActionGroupObjectsIcon;
