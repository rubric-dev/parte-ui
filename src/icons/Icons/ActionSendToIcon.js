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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 7.5C14.2 7.5 13.5 7.1 13 6.5L11.8 7.7C11.4 8.2 10.7 8.4 10 8.4C8.6 8.5 7.5 7.4 7.5 6C7.5 5.3 7.8 4.7 8.2 4.2L9.5 3C8.9 2.5 8.5 1.8 8.5 1C8.5 0.7 8.6 0.3 8.7 0C8.5 0 8.2 0 8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 7.8 16 7.5 16 7.3C15.7 7.4 15.4 7.5 15 7.5V7.5ZM15 0H11C10.4 0 10 0.5 10 1C10 1.5 10.4 2 11 2H12.6L9.3 5.3C9.1 5.5 9 5.7 9 6C9 6.5 9.4 7 10 7C10.3 7 10.5 6.9 10.7 6.7L14 3.4V5C14 5.6 14.4 6 15 6C15.5 6 16 5.6 16 5V1C16 0.5 15.6 0 15 0V0Z", fill: "currentcolor" }) })));
}
const ActionSendToIcon = convertIcon(Icon, 'action-send-to');
export default ActionSendToIcon;
