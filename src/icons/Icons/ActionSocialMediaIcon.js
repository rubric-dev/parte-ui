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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 4C9.9 4 10.3 3.9 10.6 3.7C12 4.5 12.9 6 13 7.6V7.6C13 8.1 13.5 8.5 14 8.5C14.6 8.5 15 8.1 15 7.5C15 7.4 15 7.4 15 7.3C14.8 4.9 13.5 2.9 11.5 1.8C11.4 0.8 10.6 0 9.5 0C8.4 0 7.5 0.9 7.5 2C7.5 3.1 8.4 4 9.5 4V4ZM4 8.5C4 7.8 3.6 7.2 3.1 6.8C3.4 5.4 4.3 4.2 5.6 3.5C5.9 3.4 6.2 3.1 6.2 2.6C6.2 2.1 5.8 1.6 5.2 1.6C5 1.6 4.9 1.6 4.7 1.7C2.8 2.7 1.5 4.5 1.1 6.7C0.4 7.1 0 7.8 0 8.5C0 9.6 0.9 10.5 2 10.5C3.1 10.5 4 9.6 4 8.5V8.5ZM12.8 9.7C11.7 9.7 10.8 10.6 10.8 11.7C10.8 11.8 10.8 11.9 10.8 12C10 12.6 9 12.9 8 12.9C6.8 12.9 5.7 12.5 4.8 11.8C4.6 11.6 4.4 11.5 4.1 11.5C3.5 11.5 3.1 11.9 3.1 12.5C3.1 12.8 3.2 13.1 3.4 13.3V13.3C4.6 14.4 6.2 15 8 15C9.5 15 11 14.5 12.1 13.7C12.3 13.8 12.6 13.8 12.8 13.8C13.9 13.8 14.8 12.9 14.8 11.8C14.8 10.7 13.9 9.7 12.8 9.7V9.7Z", fill: "currentcolor" }) })));
}
const ActionSocialMediaIcon = convertIcon(Icon, 'action-social-media');
export default ActionSocialMediaIcon;
