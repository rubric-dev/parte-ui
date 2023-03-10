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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 9H7V11C7 11.6 7.4 12 8 12C8.6 12 9 11.6 9 11V9H11C11.6 9 12 8.6 12 8C12 7.4 11.6 7 11 7H9V5C9 4.4 8.6 4 8 4C7.4 4 7 4.4 7 5V7H5C4.4 7 4 7.4 4 8C4 8.6 4.4 9 5 9V9ZM15 0H1C0.4 0 0 0.4 0 1V15C0 15.6 0.4 16 1 16H15C15.6 16 16 15.6 16 15V1C16 0.4 15.6 0 15 0V0ZM14 14H2V2H14V14V14Z", fill: "currentcolor" }) })));
}
const ActionInsertIcon = convertIcon(Icon, 'action-insert');
export default ActionInsertIcon;
