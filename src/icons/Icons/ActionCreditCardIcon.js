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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.0494 3.24706H1.87294C1.35529 3.24706 0.931763 3.67058 0.931763 4.18823V5.12941H15.9906V4.18823C15.9906 3.67058 15.5671 3.24706 15.0494 3.24706ZM0.931763 12.6588C0.931763 13.1765 1.35529 13.6 1.87294 13.6H15.0494C15.5671 13.6 15.9906 13.1765 15.9906 12.6588V7.01176H0.931763C0.931763 7.01176 0.931763 12.6588 0.931763 12.6588ZM6.10823 10.7765H10.8141C11.0776 10.7765 11.2847 10.9835 11.2847 11.2471C11.2847 11.5106 11.0776 11.7176 10.8141 11.7176H6.10823C5.8447 11.7176 5.63765 11.5106 5.63765 11.2471C5.63765 10.9835 5.85412 10.7765 6.10823 10.7765ZM3.2847 10.7765H4.22588C4.48941 10.7765 4.69647 10.9835 4.69647 11.2471C4.69647 11.5106 4.48941 11.7176 4.22588 11.7176H3.2847C3.02117 11.7176 2.81412 11.5106 2.81412 11.2471C2.81412 10.9835 3.03059 10.7765 3.2847 10.7765Z", fill: "currentcolor" }) })));
}
const ActionCreditCardIcon = convertIcon(Icon, 'action-credit-card');
export default ActionCreditCardIcon;
