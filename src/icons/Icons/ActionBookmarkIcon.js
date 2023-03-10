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
    return (_jsx("svg", Object.assign({ width: size, height: "17", viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.2 0.01H11.05C11.03 0.01 11.02 0 11 0H5C4.98 0 4.97 0.01 4.95 0.01H4.8C4.36 0.01 4 0.38 4 0.83V15.58C4 16.03 4.25 16.14 4.57 15.82L7.44 12.88C7.75 12.56 8.26 12.56 8.57 12.88L11.44 15.82C11.75 16.14 12.01 16.03 12.01 15.58V0.83C12 0.38 11.64 0.01 11.2 0.01Z", fill: "currentcolor" }) })));
}
const ActionBookmarkIcon = convertIcon(Icon, 'action-bookmark');
export default ActionBookmarkIcon;
