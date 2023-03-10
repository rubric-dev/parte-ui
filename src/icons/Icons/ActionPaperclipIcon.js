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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.68 2.31001C13.8 1.43001 12.63 0.990005 11.46 0.990005C10.31 0.990005 9.15 1.43001 8.27 2.31001L0.95 9.63001C0.32 10.26 0 11.09 0 11.91C0 12.73 0.31 13.57 0.95 14.2C1.57 14.82 2.4 15.13 3.23 15.13C4.06 15.13 4.89 14.82 5.53 14.18L12.84 6.86001C13.6 6.09001 13.6 4.88001 12.85 4.13001C12.1 3.38001 10.86 3.37001 10.1 4.13001L4.03 10.21V10.21C3.79 10.46 3.79 10.86 4.04 11.11C4.29 11.36 4.69 11.36 4.95 11.12V11.12L11.02 5.04001C11.27 4.79001 11.69 4.79001 11.93 5.03001C12.18 5.28001 12.18 5.70001 11.93 5.95001L4.62 13.27C3.87 14.02 2.58 14.01 1.86 13.28C1.11 12.53 1.13 11.26 1.87 10.52L9.2 3.21001C10.44 1.97001 12.55 1.95001 13.78 3.18001C15.02 4.42001 15.02 6.54001 13.78 7.78001L6.66 14.91V14.91C6.42 15.16 6.42 15.55 6.67 15.79C6.91 16.03 7.3 16.03 7.55 15.8V15.81L14.68 8.68001C15.56 7.82001 16 6.67001 16 5.51001C16 4.35001 15.56 3.19001 14.68 2.31001Z", fill: "currentcolor" }) })));
}
const ActionPaperclipIcon = convertIcon(Icon, 'action-paperclip');
export default ActionPaperclipIcon;
