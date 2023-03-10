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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 14.62L11 12.22V9.77C10.68 9.86 10.34 9.92 10 9.95V12.22L6 14.62V8.71C5.62 8.4 5.28 8.05 5 7.65V14.62L1 12.22V8C1.55 8 2 7.55 2 7C2 6.45 1.55 6 1 6V1.38L4.15 3.27C4.23 2.93 4.33 2.61 4.47 2.3L0.76 0.07V0.08C0.68 0.03 0.59 0 0.5 0C0.22 0 0 0.22 0 0.5V12.5C0 12.68 0.1 12.83 0.25 12.92V12.93L5.25 15.93V15.92C5.32 15.97 5.41 16 5.5 16C5.59 16 5.68 15.97 5.75 15.92V15.93L10.49 13.08L15.23 15.93V15.92C15.32 15.97 15.41 16 15.5 16C15.78 16 16 15.78 16 15.5V11.72C15.7 11.89 15.37 12 15 12V14.62ZM2 5C2 5.55 2.45 6 3 6C3.55 6 4 5.55 4 5C4 4.45 3.55 4 3 4C2.45 4 2 4.45 2 5ZM8 4C7.45 4 7 4.45 7 5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5C9 4.45 8.55 4 8 4ZM15.75 3.08V3.08L14.56 2.36C14.74 2.79 14.85 3.26 14.92 3.74L15 3.78V7.17L16 8.17V3.5C16 3.32 15.9 3.17 15.75 3.08ZM10 2C9.45 2 9 2.45 9 3C9 3.55 9.45 4 10 4C10.55 4 11 3.55 11 3C11 2.45 10.55 2 10 2ZM13.3 6.89C13.74 6.19 14 5.38 14 4.5C14 2.01 11.99 0 9.5 0C7.01 0 5 2.01 5 4.5C5 6.99 7.01 9 9.5 9C10.38 9 11.19 8.74 11.89 8.3L14.3 10.71C14.47 10.89 14.72 11 15 11C15.55 11 16 10.55 16 10C16 9.72 15.89 9.47 15.71 9.29L13.3 6.89ZM9.5 8C7.57 8 6 6.43 6 4.5C6 2.57 7.57 1 9.5 1C11.43 1 13 2.57 13 4.5C13 6.43 11.43 8 9.5 8Z", fill: "currentcolor" }) })));
}
const ActionPathSearchIcon = convertIcon(Icon, 'action-path-search');
export default ActionPathSearchIcon;
