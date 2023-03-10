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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6Zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29A.997.997 0 0 0 8 0c-.28 0-.53.11-.71.29l-7 7a1.003 1.003 0 0 0 1.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71Z", clipRule: "evenodd" }) })));
}
const MiscellaneousHomeIcon = convertIcon(Icon, 'miscellaneous-home');
export default MiscellaneousHomeIcon;
