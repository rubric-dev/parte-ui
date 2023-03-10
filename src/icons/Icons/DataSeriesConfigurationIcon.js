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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.94 9.64C10.59 9.87 11.28 10 12 10C12.14 10 12.29 9.99 12.43 9.99L9.7 12.71C9.52 12.89 9.27 13 8.99 13C8.71 13 8.46 12.89 8.28 12.7L5 9.41L2 12.41V14H14.99C15.54 14 15.99 14.45 15.99 15C15.99 15.55 15.54 16 14.99 16H1C0.45 16 0 15.55 0 15V5C0 4.45 0.45 4 1 4C1.55 4 2 4.45 2 5V9.59L4.29 7.29C4.47 7.11 4.72 7 5 7C5.28 7 5.53 7.11 5.71 7.29L9 10.59L9.94 9.64ZM14.67 3.2H15.59C15.81 3.2 15.99 3.38 15.99 3.6V4.4C15.99 4.62 15.81 4.8 15.59 4.8H14.66C14.6 5 14.52 5.18 14.42 5.35L15.08 6C15.23 6.15 15.23 6.4 15.08 6.55L14.54 7.1C14.39 7.25 14.14 7.25 13.99 7.1L13.34 6.45C13.17 6.55 12.98 6.63 12.79 6.69V7.6C12.79 7.82 12.61 8 12.39 8H11.59C11.37 8 11.19 7.82 11.19 7.6V6.67C11.01 6.61 10.83 6.54 10.67 6.45L9.99 7.13C9.84 7.29 9.58 7.29 9.42 7.13L8.86 6.57C8.71 6.41 8.71 6.16 8.86 6L9.54 5.32C9.46 5.16 9.38 4.99 9.32 4.8H8.39C8.17 4.8 7.99 4.62 7.99 4.4V3.6C7.99 3.38 8.17 3.2 8.39 3.2H9.32C9.38 3 9.46 2.82 9.56 2.65L8.91 2.01C8.76 1.86 8.76 1.61 8.91 1.46L9.45 0.91C9.6 0.76 9.84 0.76 9.99 0.91L10.64 1.56C10.82 1.46 11 1.38 11.19 1.32V0.4C11.19 0.18 11.37 0 11.59 0H12.39C12.61 0 12.79 0.18 12.79 0.4V1.33C12.97 1.39 13.14 1.47 13.31 1.55L13.99 0.87C14.14 0.71 14.4 0.71 14.56 0.87L15.13 1.44C15.28 1.6 15.28 1.85 15.13 2.01L14.45 2.69C14.54 2.85 14.61 3.02 14.67 3.2ZM10.49 4C10.49 4.83 11.16 5.5 11.99 5.5C12.82 5.5 13.49 4.83 13.49 4C13.49 3.17 12.82 2.5 11.99 2.5C11.17 2.5 10.49 3.17 10.49 4Z", fill: "currentcolor" }) })));
}
const DataSeriesConfigurationIcon = convertIcon(Icon, 'data-series-configuration');
export default DataSeriesConfigurationIcon;
