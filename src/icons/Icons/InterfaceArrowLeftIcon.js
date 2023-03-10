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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M13.99 6.99H4.41L7.7 3.7a1.003 1.003 0 0 0-1.42-1.42l-5 5a1.014 1.014 0 0 0 0 1.42l5 5a1.003 1.003 0 0 0 1.42-1.42L4.41 8.99H14c.55 0 1-.45 1-1s-.46-1-1.01-1Z", clipRule: "evenodd" }) })));
}
const InterfaceArrowLeftIcon = convertIcon(Icon, 'interface-arrow-left');
export default InterfaceArrowLeftIcon;
