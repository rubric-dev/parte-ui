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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 6c.28 0 .53-.11.71-.29L7 3.41V11c0 .55.45 1 1 1s1-.45 1-1V3.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-4-4A.997.997 0 008 0c-.28 0-.53.11-.71.29l-4 4A1.003 1.003 0 004 6zm11 5c-.55 0-1 .45-1 1v2H2v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z", fill: "currentcolor" }) })));
}
const ActionExportIcon = convertIcon(Icon, 'action-export');
export default ActionExportIcon;
