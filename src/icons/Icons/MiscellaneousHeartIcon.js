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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M16 5.095c0-2.255-1.88-4.083-4.2-4.083-1.682 0-3.13.964-3.8 2.352a4.206 4.206 0 0 0-3.8-2.352C1.88 1.012 0 2.84 0 5.095c0 .066.007.13.01.195H.004c.001.046.01.095.014.142.003.048.008.095.013.142.07.8.321 1.663.824 2.573C2.073 10.355 4.232 12.018 8 15c3.767-2.982 5.926-4.647 7.144-6.853.501-.906.752-1.767.823-2.563.007-.055.012-.11.016-.164.003-.043.012-.088.013-.13h-.006c.003-.065.01-.13.01-.195Z", clipRule: "evenodd" }) })));
}
const MiscellaneousHeartIcon = convertIcon(Icon, 'miscellaneous-heart');
export default MiscellaneousHeartIcon;
