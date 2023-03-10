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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M3.285 3.755a.944.944 0 0 0-.941.941V15.05c0 .518.423.942.94.942a.944.944 0 0 0 .942-.942V4.696a.944.944 0 0 0-.941-.94Zm0-2.823a.944.944 0 0 0-.941.94c0 .519.423.942.94.942a.944.944 0 0 0 .942-.941.944.944 0 0 0-.941-.941Zm1.882 2.852v6.804c1.949-1.986 5.572 1.647 8.47 0V3.784c-2.823 1.948-6.53-1.911-8.47 0Z", clipRule: "evenodd" }) })));
}
const InterfaceFlagIcon = convertIcon(Icon, 'interface-flag');
export default InterfaceFlagIcon;
