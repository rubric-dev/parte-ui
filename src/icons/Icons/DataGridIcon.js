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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M15 9c.55 0 1-.45 1-1s-.45-1-1-1h-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1H9V1c0-.55-.45-1-1-1S7 .45 7 1v1H4V1c0-.55-.45-1-1-1S2 .45 2 1v1H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v3H1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1Zm-8 3H4V9h3v3Zm0-5H4V4h3v3Zm5 5H9V9h3v3Zm0-5H9V4h3v3Z", clipRule: "evenodd" }) })));
}
const DataGridIcon = convertIcon(Icon, 'data-grid');
export default DataGridIcon;