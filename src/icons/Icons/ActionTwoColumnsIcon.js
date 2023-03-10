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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.69647 0.931763H1.87294C1.35529 0.931763 0.931763 1.35529 0.931763 1.87294V15.0494C0.931763 15.5671 1.35529 15.9906 1.87294 15.9906H4.69647C5.21412 15.9906 5.63765 15.5671 5.63765 15.0494V1.87294C5.63765 1.35529 5.21412 0.931763 4.69647 0.931763ZM15.7176 7.80235L13.8353 5.92C13.6659 5.75059 13.4306 5.64706 13.1671 5.64706C12.6494 5.64706 12.2259 6.07059 12.2259 6.58823V10.3529C12.2259 10.8706 12.6494 11.2941 13.1671 11.2941C13.4306 11.2941 13.6659 11.1906 13.8353 11.0212L15.7176 9.13882C15.8871 8.96941 15.9906 8.73412 15.9906 8.47059C15.9906 8.20706 15.8871 7.97176 15.7176 7.80235ZM10.3435 0.931763H7.52C7.00235 0.931763 6.57882 1.35529 6.57882 1.87294V15.0494C6.57882 15.5671 7.00235 15.9906 7.52 15.9906H10.3435C10.8612 15.9906 11.2847 15.5671 11.2847 15.0494V1.87294C11.2847 1.35529 10.8612 0.931763 10.3435 0.931763Z", fill: "currentcolor" }) })));
}
const ActionTwoColumnsIcon = convertIcon(Icon, 'action-two-columns');
export default ActionTwoColumnsIcon;
