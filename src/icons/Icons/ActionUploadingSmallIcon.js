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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { d: "M6 0C7.8 0 9.405 0.8025 10.5 2.055C10.5 2.055 10.875 2.625 10.5 3C10.125 3.375 9.345 3 9.345 3C8.52 2.085 7.3275 1.5 6 1.5C3.5175 1.5 1.5 3.5175 1.5 6C1.5 7.9575 2.7525 9.6075 4.5 10.2225V10.215C4.9725 10.3875 5.4675 10.5 6 10.5C8.4825 10.5 10.5 8.4825 10.5 6C10.5 5.5875 10.8375 5.25 11.25 5.25C11.6625 5.25 12 5.5875 12 6C12 9.315 9.315 12 6 12C5.745 12 5.4975 11.9775 5.25 11.9475C5.235 11.9475 5.22 11.94 5.205 11.94C2.265 11.55 0 9.045 0 6C0 2.685 2.685 0 6 0Z", fill: "currentcolor" }) })));
}
const ActionUploadingSmallIcon = convertIcon(Icon, 'action-uploading-small');
export default ActionUploadingSmallIcon;
