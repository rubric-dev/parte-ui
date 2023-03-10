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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M3.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm9.5 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-9.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 0c1.46 0 2.527.668 3 2l.815 3.255c.748.057 1.477.122 2.186.195L11 2h2l.001 3.688c.698.095 1.37.198 2.013.312.623.11.986.479.986 1v3.354a4.001 4.001 0 0 0-6.873 1.645H7.999l-.026-.002A4.5 4.5 0 0 0 .659 9.01l-.654.001v-.829C.003 7.386.002 6.423 0 6.022 0 5.5.376 4.99 1 4.99V1a1 1 0 0 1 1-1h3Zm1 2H3v2.99c1.29.024 2.554.069 3.781.135L6 2Z", clipRule: "evenodd" }) })));
}
const InterfaceTractorIcon = convertIcon(Icon, 'interface-tractor');
export default InterfaceTractorIcon;
