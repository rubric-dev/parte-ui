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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2C10 1.45 9.55 1 9 1H8C7.45 1 7 1.45 7 2V5H10V2ZM13 12H14C14.55 12 15 11.55 15 11V8H12V11C12 11.55 12.45 12 13 12ZM15 5C15 4.45 14.55 4 14 4H13C12.45 4 12 4.45 12 5V7H15V5ZM10 6H7V9H10V6ZM5 7C5 6.45 4.55 6 4 6H3C2.45 6 2 6.45 2 7V8H5V7ZM8 12H9C9.55 12 10 11.55 10 11V10H7V11C7 11.55 7.45 12 8 12ZM15 13H2C1.45 13 1 13.45 1 14C1 14.55 1.45 15 2 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13ZM3 12H4C4.55 12 5 11.55 5 11V9H2V11C2 11.55 2.45 12 3 12Z", fill: "currentcolor" }) })));
}
const DataStackedChartIcon = convertIcon(Icon, 'data-stacked-chart');
export default DataStackedChartIcon;
