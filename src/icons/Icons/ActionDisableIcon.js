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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46117 0.931763C4.30117 0.931763 0.931763 4.30117 0.931763 8.46117C0.931763 12.6212 4.30117 15.9906 8.46117 15.9906C12.6212 15.9906 15.9906 12.6212 15.9906 8.46117C15.9906 4.30117 12.6212 0.931763 8.46117 0.931763ZM2.81412 8.46117C2.81412 5.34588 5.34588 2.81412 8.46117 2.81412C9.6847 2.81412 10.8047 3.20941 11.7271 3.86823L3.86823 11.7271C3.20941 10.8047 2.81412 9.6847 2.81412 8.46117ZM8.46117 14.1082C7.23765 14.1082 6.11764 13.7129 5.19529 13.0541L13.0541 5.19529C13.7129 6.11764 14.1082 7.23765 14.1082 8.46117C14.1082 11.5859 11.5859 14.1082 8.46117 14.1082Z", fill: "currentcolor" }) })));
}
const ActionDisableIcon = convertIcon(Icon, 'action-disable');
export default ActionDisableIcon;
