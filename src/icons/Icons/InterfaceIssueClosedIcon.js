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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M9.296.104a2.99 2.99 0 0 0-1.003.664 2.987 2.987 0 0 0-.75 1.25 6 6 0 1 0 6.28 4.527c.043-.039.085-.079.127-.12l1.456-1.456A8 8 0 1 1 9.296.105Zm2.532 5.2a.997.997 0 0 1-.707-.294L9.707 3.596a1 1 0 1 1 1.414-1.414l.707.707 1.768-1.768a1 1 0 1 1 1.414 1.415L12.536 5.01a.997.997 0 0 1-.708.293ZM9 12H7v-2h2v2Zm0-3H7V4h2v5Z", clipRule: "evenodd" }) })));
}
const InterfaceIssueClosedIcon = convertIcon(Icon, 'interface-issue-closed');
export default InterfaceIssueClosedIcon;
