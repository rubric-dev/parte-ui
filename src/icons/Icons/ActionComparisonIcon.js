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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46117 0.931763C7.94353 0.931763 7.52 1.35529 7.52 1.87294V15.0494C7.52 15.5671 7.94353 15.9906 8.46117 15.9906C8.97882 15.9906 9.40235 15.5671 9.40235 15.0494V1.87294C9.40235 1.35529 8.97882 0.931763 8.46117 0.931763ZM5.63765 3.75529H1.87294C1.35529 3.75529 0.931763 4.17882 0.931763 4.69647V6.57882C0.931763 7.09647 1.35529 7.52 1.87294 7.52H5.63765C6.15529 7.52 6.57882 7.09647 6.57882 6.57882V4.69647C6.57882 4.17882 6.15529 3.75529 5.63765 3.75529ZM15.0494 3.75529H11.2847C10.7671 3.75529 10.3435 4.17882 10.3435 4.69647V6.57882C10.3435 7.09647 10.7671 7.52 11.2847 7.52H15.0494C15.5671 7.52 15.9906 7.09647 15.9906 6.57882V4.69647C15.9906 4.17882 15.5671 3.75529 15.0494 3.75529ZM15.0494 6.57882H11.2847V4.69647H15.0494V6.57882ZM15.0494 9.40235H11.2847C10.7671 9.40235 10.3435 9.82588 10.3435 10.3435V12.2259C10.3435 12.7435 10.7671 13.1671 11.2847 13.1671H15.0494C15.5671 13.1671 15.9906 12.7435 15.9906 12.2259V10.3435C15.9906 9.82588 15.5671 9.40235 15.0494 9.40235ZM15.0494 12.2259H11.2847V10.3435H15.0494V12.2259ZM5.63765 9.40235H1.87294C1.35529 9.40235 0.931763 9.82588 0.931763 10.3435V12.2259C0.931763 12.7435 1.35529 13.1671 1.87294 13.1671H5.63765C6.15529 13.1671 6.57882 12.7435 6.57882 12.2259V10.3435C6.57882 9.82588 6.15529 9.40235 5.63765 9.40235Z", fill: "currentcolor" }) })));
}
const ActionComparisonIcon = convertIcon(Icon, 'action-comparison');
export default ActionComparisonIcon;
