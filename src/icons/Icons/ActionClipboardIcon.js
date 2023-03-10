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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 2C11 1.45 10.55 1 10 1H10.22C9.88 0.4 9.24 0 8.5 0C7.76 0 7.12 0.4 6.78 1H7C6.45 1 6 1.45 6 2V3H11V2ZM13 2H12V4H5V2H4C3.45 2 3 2.45 3 3V15C3 15.55 3.45 16 4 16H13C13.55 16 14 15.55 14 15V3C14 2.45 13.55 2 13 2Z", fill: "currentcolor" }) })));
}
const ActionClipboardIcon = convertIcon(Icon, 'action-clipboard');
export default ActionClipboardIcon;
