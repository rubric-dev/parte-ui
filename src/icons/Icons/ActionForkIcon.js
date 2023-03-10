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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.0667 9.14666C12.9067 8.98666 12.6844 8.88888 12.4356 8.88888C11.9467 8.88888 11.5467 9.28888 11.5467 9.77777C11.5467 10.0267 11.6444 10.2489 11.8044 10.4089L12.0622 10.6667H11.0222L6.57778 6.22221H12.0622L11.8044 6.47999C11.6444 6.63999 11.5467 6.86221 11.5467 7.1111C11.5467 7.59999 11.9467 7.99999 12.4356 7.99999C12.6844 7.99999 12.9067 7.90221 13.0667 7.74221L14.8444 5.96443C15.0044 5.80443 15.1022 5.58221 15.1022 5.33332C15.1022 5.08443 15.0044 4.86221 14.8444 4.70221L13.0667 2.92443C12.9067 2.76443 12.6844 2.66666 12.4356 2.66666C11.9467 2.66666 11.5467 3.06666 11.5467 3.55555C11.5467 3.80443 11.6444 4.02666 11.8044 4.18666L12.0622 4.44443H1.76889C1.28 4.44443 0.880005 4.84443 0.880005 5.33332C0.880005 5.82221 1.28 6.22221 1.76889 6.22221H4.07112L10.0356 12.1867C10.1956 12.3467 10.4178 12.4444 10.6667 12.4444H12.08L11.8222 12.7022C11.6622 12.8622 11.5644 13.0844 11.5644 13.3333C11.5644 13.8222 11.9644 14.2222 12.4533 14.2222C12.7022 14.2222 12.9244 14.1244 13.0844 13.9644L14.8622 12.1867C15.0222 12.0267 15.12 11.8044 15.12 11.5555C15.12 11.3067 15.0222 11.0844 14.8622 10.9244L13.0667 9.14666Z", fill: "currentcolor" }) })));
}
const ActionForkIcon = convertIcon(Icon, 'action-fork');
export default ActionForkIcon;
