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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M15.238 6.955h-1.742a5.04 5.04 0 0 0-.423-.979l1.28-1.28a.755.755 0 0 0 0-1.063l-1.064-1.064a.755.755 0 0 0-1.063 0l-1.28 1.28a5.66 5.66 0 0 0-.98-.414v-1.75a.755.755 0 0 0-.752-.753H7.708a.755.755 0 0 0-.753.753v1.75a5.619 5.619 0 0 0-1.035.443L4.696 2.654a.727.727 0 0 0-1.026 0L2.654 3.68a.727.727 0 0 0 0 1.026l1.224 1.223c-.189.32-.34.66-.452 1.026H1.685a.755.755 0 0 0-.753.753v1.506c0 .414.338.753.753.753h1.74c.104.348.255.668.424.979l-1.28 1.28a.755.755 0 0 0 0 1.063l1.064 1.064a.755.755 0 0 0 1.063 0l1.28-1.28c.31.17.63.31.98.414v1.75c0 .415.338.754.752.754h1.506a.755.755 0 0 0 .753-.753v-1.75a5.624 5.624 0 0 0 1.035-.443l1.224 1.223a.727.727 0 0 0 1.026 0l1.025-1.026a.727.727 0 0 0 0-1.026l-1.223-1.223c.179-.33.339-.668.452-1.035h1.74A.755.755 0 0 0 16 9.205V7.699a.768.768 0 0 0-.762-.744Zm-6.777 4.33A2.82 2.82 0 0 1 5.638 8.46 2.82 2.82 0 0 1 8.46 5.638a2.82 2.82 0 0 1 2.824 2.823 2.82 2.82 0 0 1-2.824 2.824Z", clipRule: "evenodd" }) })));
}
const InterfaceCogIcon = convertIcon(Icon, 'interface-cog');
export default InterfaceCogIcon;