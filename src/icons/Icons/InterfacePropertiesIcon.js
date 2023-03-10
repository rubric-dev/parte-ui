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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm4-3h9c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1Zm-4 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm13-5H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1Zm0 6H6c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1ZM2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z", clipRule: "evenodd" }) })));
}
const InterfacePropertiesIcon = convertIcon(Icon, 'interface-properties');
export default InterfacePropertiesIcon;