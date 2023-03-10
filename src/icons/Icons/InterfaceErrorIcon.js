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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M8.461.932c-4.16 0-7.53 3.37-7.53 7.53s3.37 7.529 7.53 7.529 7.53-3.37 7.53-7.53S12.62.931 8.46.931Zm.941 12.235H7.52v-1.882h1.882v1.882Zm0-2.823H7.52V3.755h1.882v6.589Z", clipRule: "evenodd" }) })));
}
const InterfaceErrorIcon = convertIcon(Icon, 'interface-error');
export default InterfaceErrorIcon;
