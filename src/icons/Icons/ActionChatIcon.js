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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 10C4.9 10 4 9.1 4 8V3H1C0.45 3 0 3.45 0 4V12C0 12.55 0.45 13 1 13V15C1 15.55 1.45 16 2 16C2.28 16 2.53 15.89 2.71 15.71L5.41 13H10C10.55 13 11 12.55 11 12V10.83L10.17 10H6ZM15 0H6C5.45 0 5 0.45 5 1V8C5 8.55 5.45 9 6 9H10.59L13.3 11.71C13.47 11.89 13.72 12 14 12C14.55 12 15 11.55 15 11V9C15.55 9 16 8.55 16 8V1C16 0.45 15.55 0 15 0Z", fill: "currentcolor" }) })));
}
const ActionChatIcon = convertIcon(Icon, 'action-chat');
export default ActionChatIcon;
