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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.6 8.94C9.91 9 10.22 9.03 10.55 9.03C10.75 9.03 10.95 9.02 11.15 8.99C11.24 8.98 11.31 8.97 11.42 8.95C11.52 8.94 11.64 8.91 11.81 8.87L12.04 8.8C12.08 8.79 12.12 8.78 12.15 8.76L12.37 8.98L9.67 11.7C9.49 11.89 9.24 12 8.96 12C8.68 12 8.43 11.89 8.25 11.7L4.98 8.41L1.99 11.41V13H14.93C15.48 13 15.93 13.45 15.93 14C15.93 14.55 15.48 15 14.93 15H1C0.45 15 0 14.55 0 14V3.99C0 3.44 0.45 2.99 1 2.99C1.55 2.99 2 3.44 2 3.99V8.58L4.28 6.28C4.45 6.1 4.7 5.99 4.98 5.99C5.26 5.99 5.51 6.1 5.68 6.28L8.96 9.58L9.6 8.94ZM15.82 8.53C15.92 8.65 15.99 8.8 16 8.97C16 9.31 15.73 9.58 15.39 9.58C15.21 9.58 15.06 9.51 14.96 9.4L12.72 7.15C12.59 7.23 12.46 7.31 12.32 7.38C12.3 7.39 12.27 7.4 12.25 7.41C12.11 7.47 11.98 7.53 11.83 7.58H11.82C11.68 7.63 11.53 7.66 11.38 7.69C11.34 7.7 11.3 7.71 11.27 7.71C11.12 7.73 10.97 7.75 10.81 7.75C8.96 7.75 7.46 6.24 7.46 4.38C7.46 2.52 8.96 1.01 10.81 1C12.66 1 14.16 2.51 14.16 4.37C14.16 4.53 14.14 4.68 14.12 4.84C14.11 4.88 14.11 4.91 14.1 4.95C14.08 5.1 14.05 5.24 14 5.39V5.4C13.95 5.55 13.89 5.68 13.83 5.82C13.82 5.84 13.81 5.87 13.8 5.89C13.73 6.03 13.66 6.16 13.57 6.29L15.82 8.53ZM10.81 6.59C12.03 6.59 13.02 5.6 13.02 4.37C13.02 3.14 12.03 2.15 10.81 2.15C9.59 2.15 8.6 3.14 8.6 4.37C8.6 5.59 9.59 6.59 10.81 6.59Z", fill: "currentcolor" }) })));
}
const DataSeriesSearchIcon = convertIcon(Icon, 'data-series-search');
export default DataSeriesSearchIcon;
