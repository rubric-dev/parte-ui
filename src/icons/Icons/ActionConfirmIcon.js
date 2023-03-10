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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.12941 4.97882C8.96 4.8 8.7247 4.69647 8.46117 4.69647C7.94353 4.69647 7.52 5.12 7.52 5.63765C7.52 5.90117 7.62353 6.13647 7.79294 6.30588L9.67529 8.18823C9.8447 8.35765 10.08 8.46117 10.3435 8.46117C10.6071 8.46117 10.8424 8.35765 11.0118 8.18823L15.7176 3.48235C15.8871 3.31294 15.9906 3.07765 15.9906 2.81412C15.9906 2.29647 15.5671 1.87294 15.0494 1.87294C14.7859 1.87294 14.5506 1.97647 14.3812 2.14588L10.3435 6.19294L9.12941 4.97882ZM14.0424 7.81176C14.0706 8.02823 14.1082 8.23529 14.1082 8.46117C14.1082 11.5765 11.5765 14.1082 8.46117 14.1082C5.34588 14.1082 2.81412 11.5765 2.81412 8.46117C2.81412 5.34588 5.34588 2.81412 8.46117 2.81412C9.22353 2.81412 9.95764 2.97412 10.6259 3.24706L12.0376 1.83529C10.9741 1.26117 9.76 0.931763 8.46117 0.931763C4.30117 0.931763 0.931763 4.30117 0.931763 8.46117C0.931763 12.6212 4.30117 15.9906 8.46117 15.9906C12.6212 15.9906 15.9906 12.6212 15.9906 8.46117C15.9906 7.68 15.8682 6.91765 15.6518 6.21176L14.0424 7.81176Z", fill: "currentcolor" }) })));
}
const ActionConfirmIcon = convertIcon(Icon, 'action-confirm');
export default ActionConfirmIcon;
