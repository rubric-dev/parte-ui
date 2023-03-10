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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.71 7.29L13.71 5.29C13.53 5.11 13.28 5 13 5C12.45 5 12 5.45 12 6C12 6.28 12.11 6.53 12.29 6.71L12.59 7H9V3.41L9.29 3.7C9.47 3.89 9.72 4 10 4C10.55 4 11 3.55 11 3C11 2.72 10.89 2.47 10.71 2.29L8.71 0.29C8.53 0.11 8.28 0 8 0C7.72 0 7.47 0.11 7.29 0.29L5.29 2.29C5.11 2.47 5 2.72 5 3C5 3.55 5.45 4 6 4C6.28 4 6.53 3.89 6.71 3.71L7 3.41V7H3.41L3.7 6.71C3.89 6.53 4 6.28 4 6C4 5.45 3.55 5 3 5C2.72 5 2.47 5.11 2.29 5.29L0.29 7.29C0.11 7.47 0 7.72 0 8C0 8.28 0.11 8.53 0.29 8.71L2.29 10.71C2.47 10.89 2.72 11 3 11C3.55 11 4 10.55 4 10C4 9.72 3.89 9.47 3.71 9.29L3.41 9H7V12.59L6.71 12.3C6.53 12.11 6.28 12 6 12C5.45 12 5 12.45 5 13C5 13.28 5.11 13.53 5.29 13.71L7.29 15.71C7.47 15.89 7.72 16 8 16C8.28 16 8.53 15.89 8.71 15.71L10.71 13.71C10.89 13.53 11 13.28 11 13C11 12.45 10.55 12 10 12C9.72 12 9.47 12.11 9.29 12.29L9 12.59V9H12.59L12.3 9.29C12.11 9.47 12 9.72 12 10C12 10.55 12.45 11 13 11C13.28 11 13.53 10.89 13.71 10.71L15.71 8.71C15.89 8.53 16 8.28 16 8C16 7.72 15.89 7.47 15.71 7.29Z", fill: "currentcolor" }) })));
}
const ActionMoveIcon = convertIcon(Icon, 'action-move');
export default ActionMoveIcon;
