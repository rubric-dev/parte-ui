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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 5C1.57 5 0 6.57 0 8.5C0 10.43 1.57 12 3.5 12C5.43 12 7 10.43 7 8.5C7 6.57 5.43 5 3.5 5ZM12.5 5C10.57 5 9 6.57 9 8.5C9 10.43 10.57 12 12.5 12C14.43 12 16 10.43 16 8.5C16 6.57 14.43 5 12.5 5Z", fill: "currentcolor" }) })));
}
const ActionUngroupObjectsIcon = convertIcon(Icon, 'action-ungroup-objects');
export default ActionUngroupObjectsIcon;
