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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 11V13H4V11H2ZM1 9H5C5.55 9 6 9.45 6 10V14C6 14.55 5.55 15 5 15H1C0.45 15 0 14.55 0 14V10C0 9.45 0.45 9 1 9ZM10 3H15C15.55 3 16 3.45 16 4C16 4.55 15.55 5 15 5H10C9.45 5 9 4.55 9 4C9 3.45 9.45 3 10 3ZM6 1C6.55 1 7 1.45 7 2C7 2.28 6.89 2.53 6.71 2.71L3.71 6.71C3.53 6.89 3.28 7 3 7C2.72 7 2.47 6.89 2.29 6.71L0.29 4.71C0.11 4.53 0 4.28 0 4C0 3.45 0.45 3 1 3C1.28 3 1.53 3.11 1.71 3.29L3 4.59L5.29 1.29C5.47 1.11 5.72 1 6 1ZM10 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13H10C9.45 13 9 12.55 9 12C9 11.45 9.45 11 10 11Z", fill: "currentcolor" }) })));
}
const DataFormIcon = convertIcon(Icon, 'data-form');
export default DataFormIcon;
