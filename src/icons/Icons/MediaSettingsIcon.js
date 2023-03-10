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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M3 1c0-.55-.45-1-1-1S1 .45 1 1v3h2V1Zm0 4H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1Zm12-4c0-.55-.45-1-1-1s-1 .45-1 1v2h2V1ZM9 1c0-.55-.45-1-1-1S7 .45 7 1v6h2V1ZM1 15c0 .55.45 1 1 1s1-.45 1-1v-5H1v5ZM15 4h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1Zm-2 11c0 .55.45 1 1 1s1-.45 1-1V9h-2v6ZM9 8H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1Zm-2 7c0 .55.45 1 1 1s1-.45 1-1v-2H7v2Z", clipRule: "evenodd" }) })));
}
const MediaSettingsIcon = convertIcon(Icon, 'media-settings');
export default MediaSettingsIcon;
