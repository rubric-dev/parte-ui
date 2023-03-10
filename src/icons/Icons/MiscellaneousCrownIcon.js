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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "m2 6 3 2 3-4 3 4 3-2-1 6H3L2 6Zm6-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM1 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM3 13h10v2H3v-2Z", clipRule: "evenodd" }) })));
}
const MiscellaneousCrownIcon = convertIcon(Icon, 'miscellaneous-crown');
export default MiscellaneousCrownIcon;
