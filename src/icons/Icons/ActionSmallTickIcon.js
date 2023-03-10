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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5C11.72 5 11.47 5.11 11.29 5.29L7 9.59L4.71 7.29C4.53 7.11 4.28 7 4 7C3.45 7 3 7.45 3 8C3 8.28 3.11 8.53 3.29 8.71L6.29 11.71C6.47 11.89 6.72 12 7 12C7.28 12 7.53 11.89 7.71 11.71L12.71 6.71C12.89 6.53 13 6.28 13 6C13 5.45 12.55 5 12 5Z", fill: "currentcolor" }) })));
}
const ActionSmallTickIcon = convertIcon(Icon, 'action-small-tick');
export default ActionSmallTickIcon;
