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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.81412 6.10823C1.77882 6.10823 0.931763 6.95529 0.931763 7.99058C0.931763 9.02588 1.77882 9.87293 2.81412 9.87293C3.84941 9.87293 4.69647 9.02588 4.69647 7.99058C4.69647 6.95529 3.85882 6.10823 2.81412 6.10823ZM6.72 7.85882C6.8047 7.94352 6.92706 7.99999 7.04941 7.99999C7.31294 7.99999 7.52 7.79293 7.52 7.5294C7.52 7.39764 7.46353 7.2847 7.37882 7.19999L6.30588 6.10823H11.7553C12.0188 6.10823 12.2259 5.90117 12.2259 5.63764C12.2259 5.37411 12.0188 5.16705 11.7553 5.16705H6.30588L7.38823 4.0847C7.47294 3.99999 7.52941 3.87764 7.52941 3.75529C7.52941 3.49176 7.32235 3.2847 7.05882 3.2847C6.92706 3.2847 6.81412 3.34117 6.72941 3.42587L4.84706 5.30823C4.75294 5.39293 4.69647 5.50588 4.69647 5.63764C4.69647 5.7694 4.75294 5.88235 4.83765 5.96705L6.72 7.85882ZM14.1082 6.10823C13.0729 6.10823 12.2259 6.95529 12.2259 7.99058C12.2259 9.02588 13.0729 9.87293 14.1082 9.87293C15.1435 9.87293 15.9906 9.02588 15.9906 7.99058C15.9906 6.95529 15.1529 6.10823 14.1082 6.10823ZM10.2118 8.13176C10.1176 8.04705 10.0047 7.99058 9.87294 7.99058C9.60941 7.99058 9.40235 8.19764 9.40235 8.46117C9.40235 8.59293 9.45882 8.70588 9.54353 8.79058L10.6259 9.87293H5.16706C4.90353 9.87293 4.69647 10.08 4.69647 10.3435C4.69647 10.6071 4.90353 10.8141 5.16706 10.8141H10.6165L9.53412 11.8965C9.44941 11.9812 9.39294 12.1035 9.39294 12.2259C9.39294 12.4894 9.6 12.6965 9.86353 12.6965C9.99529 12.6965 10.1082 12.64 10.1929 12.5553L12.0753 10.6729C12.16 10.5882 12.2165 10.4659 12.2165 10.3435C12.2165 10.2212 12.16 10.0988 12.0753 10.0141L10.2118 8.13176Z", fill: "currentcolor" }) })));
}
const ActionExchangeIcon = convertIcon(Icon, 'action-exchange');
export default ActionExchangeIcon;
