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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M0 3.06v9.88L4.94 8 0 3.06ZM14.94 2H1.06L8 8.94 14.94 2Zm-6.41 8.53c-.14.14-.32.22-.53.22-.21 0-.39-.08-.53-.22L6 9.06 1.06 14h13.88L10 9.06l-1.47 1.47ZM11.06 8 16 12.94V3.06L11.06 8Z", clipRule: "evenodd" }) })));
}
const InterfaceEnvelopeIcon = convertIcon(Icon, 'interface-envelope');
export default InterfaceEnvelopeIcon;
