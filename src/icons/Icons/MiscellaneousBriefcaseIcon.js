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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M15 3.98h-3v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v4h3v-1h2v1h6v-1h2v1h3v-4c0-.55-.45-1-1-1Zm-5 0H6v-1h4v1Zm3 7h-2v-1H5v1H3v-1H0v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4h-3v1Z", clipRule: "evenodd" }) })));
}
const MiscellaneousBriefcaseIcon = convertIcon(Icon, 'miscellaneous-briefcase');
export default MiscellaneousBriefcaseIcon;
