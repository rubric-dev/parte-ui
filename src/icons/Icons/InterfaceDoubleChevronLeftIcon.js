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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M4.41 8 7.7 4.71c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C2.11 7.47 2 7.72 2 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L4.41 8Zm5 0 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71l-4 4C7.11 7.47 7 7.72 7 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 0 0 1.42-1.42L9.41 8Z", clipRule: "evenodd" }) })));
}
const InterfaceDoubleChevronLeftIcon = convertIcon(Icon, 'interface-double-chevron-left');
export default InterfaceDoubleChevronLeftIcon;
