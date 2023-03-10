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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5ZM3 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9Z", fill: "currentcolor" }) })));
}
const ActionEqualsIcon = convertIcon(Icon, 'action-equals');
export default ActionEqualsIcon;
