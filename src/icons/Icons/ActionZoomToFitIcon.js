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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 10C11 10.55 11.45 11 12 11C12.28 11 12.53 10.89 12.71 10.71L14.71 8.71C14.89 8.53 15 8.28 15 8C15 7.72 14.89 7.47 14.71 7.29L12.71 5.29C12.53 5.11 12.28 5 12 5C11.45 5 11 5.45 11 6C11 6.28 11.11 6.53 11.29 6.71L12.59 8L11.3 9.29C11.11 9.47 11 9.72 11 10ZM1 5C1.55 5 2 4.55 2 4V2H4C4.55 2 5 1.55 5 1C5 0.45 4.55 0 4 0H1C0.45 0 0 0.45 0 1V4C0 4.55 0.45 5 1 5ZM5 6C5 5.45 4.55 5 4 5C3.72 5 3.47 5.11 3.29 5.29L1.29 7.29C1.11 7.47 1 7.72 1 8C1 8.28 1.11 8.53 1.29 8.71L3.29 10.71C3.47 10.89 3.72 11 4 11C4.55 11 5 10.55 5 10C5 9.72 4.89 9.47 4.71 9.29L3.41 8L4.7 6.71C4.89 6.53 5 6.28 5 6ZM6 5C6.28 5 6.53 4.89 6.71 4.71L8 3.41L9.29 4.7C9.47 4.89 9.72 5 10 5C10.55 5 11 4.55 11 4C11 3.72 10.89 3.47 10.71 3.29L8.71 1.29C8.53 1.11 8.28 1 8 1C7.72 1 7.47 1.11 7.29 1.29L5.29 3.29C5.11 3.47 5 3.72 5 4C5 4.55 5.45 5 6 5ZM15 11C14.45 11 14 11.45 14 12V14H12C11.45 14 11 14.45 11 15C11 15.55 11.45 16 12 16H15C15.55 16 16 15.55 16 15V12C16 11.45 15.55 11 15 11ZM15 0H12C11.45 0 11 0.45 11 1C11 1.55 11.45 2 12 2H14V4C14 4.55 14.45 5 15 5C15.55 5 16 4.55 16 4V1C16 0.45 15.55 0 15 0ZM4 14H2V12C2 11.45 1.55 11 1 11C0.45 11 0 11.45 0 12V15C0 15.55 0.45 16 1 16H4C4.55 16 5 15.55 5 15C5 14.45 4.55 14 4 14ZM10 11C9.72 11 9.47 11.11 9.29 11.29L8 12.59L6.71 11.3C6.53 11.11 6.28 11 6 11C5.45 11 5 11.45 5 12C5 12.28 5.11 12.53 5.29 12.71L7.29 14.71C7.47 14.89 7.72 15 8 15C8.28 15 8.53 14.89 8.71 14.71L10.71 12.71C10.89 12.53 11 12.28 11 12C11 11.45 10.55 11 10 11Z", fill: "currentcolor" }) })));
}
const ActionZoomToFitIcon = convertIcon(Icon, 'action-zoom-to-fit');
export default ActionZoomToFitIcon;
