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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H2C1.44772 16 1 15.5523 1 15C1 14.4477 1.44772 14 2 14H14ZM7.995 3.005C8.545 3.005 8.995 3.45455 8.995 4.004V4.004V9.58842L10.285 8.29971C10.465 8.11989 10.715 8.00999 10.995 8.00999C11.545 8.00999 11.995 8.45955 11.995 9.009C11.995 9.28872 11.885 9.53847 11.705 9.71829V9.71829L8.705 12.7153C8.525 12.8951 8.265 13.005 7.995 13.005C7.725 13.005 7.475 12.8951 7.285 12.7153V12.7153L4.285 9.71829C4.105 9.53847 3.995 9.28872 3.995 9.009C3.995 8.45955 4.445 8.00999 4.995 8.00999C5.275 8.00999 5.525 8.11989 5.705 8.29971V8.29971L6.995 9.58842V4.01399C6.995 3.46454 7.445 3.005 7.995 3.005ZM14 0C14.5523 0 15 0.447715 15 1C15 1.55228 14.5523 2 14 2C13.4477 2 13 1.55228 13 1C13 0.447715 13.4477 0 14 0ZM11 0C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2C10.4477 2 10 1.55228 10 1C10 0.447715 10.4477 0 11 0ZM8 0C8.55228 0 9 0.447715 9 1C9 1.55228 8.55228 2 8 2C7.44772 2 7 1.55228 7 1C7 0.447715 7.44772 0 8 0ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2C4.44772 2 4 1.55228 4 1C4 0.447715 4.44772 0 5 0ZM2 0C2.55228 0 3 0.447715 3 1C3 1.55228 2.55228 2 2 2C1.44772 2 1 1.55228 1 1C1 0.447715 1.44772 0 2 0Z", fill: "currentcolor" }) })));
}
const ActionBringDataIcon = convertIcon(Icon, 'action-bring-data');
export default ActionBringDataIcon;
