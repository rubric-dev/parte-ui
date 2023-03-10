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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.0494 7.52C14.5318 7.52 14.1082 7.94353 14.1082 8.46117C14.1082 11.5765 11.5765 14.1082 8.46117 14.1082C6.79529 14.1082 5.29882 13.3741 4.26353 12.2259H5.63765C6.15529 12.2259 6.57882 11.8024 6.57882 11.2847C6.57882 10.7671 6.15529 10.3435 5.63765 10.3435H1.87294C1.35529 10.3435 0.931763 10.7671 0.931763 11.2847V15.0494C0.931763 15.5671 1.35529 15.9906 1.87294 15.9906C2.39059 15.9906 2.81412 15.5671 2.81412 15.0494V13.4118C4.18823 14.9835 6.20235 15.9906 8.46117 15.9906C12.6212 15.9906 15.9906 12.6212 15.9906 8.46117C15.9906 7.94353 15.5671 7.52 15.0494 7.52ZM15.0494 0.931763C14.5318 0.931763 14.1082 1.35529 14.1082 1.87294V3.51059C12.7341 1.93882 10.72 0.931763 8.46117 0.931763C4.30117 0.931763 0.931763 4.30117 0.931763 8.46117C0.931763 8.97882 1.35529 9.40235 1.87294 9.40235C2.39059 9.40235 2.81412 8.97882 2.81412 8.46117C2.81412 5.34588 5.34588 2.81412 8.46117 2.81412C10.1271 2.81412 11.6235 3.54823 12.6588 4.69647H11.2847C10.7671 4.69647 10.3435 5.12 10.3435 5.63765C10.3435 6.15529 10.7671 6.57882 11.2847 6.57882H15.0494C15.5671 6.57882 15.9906 6.15529 15.9906 5.63765V1.87294C15.9906 1.35529 15.5671 0.931763 15.0494 0.931763Z", fill: "currentcolor" }) })));
}
const ActionRefreshIcon = convertIcon(Icon, 'action-refresh');
export default ActionRefreshIcon;
