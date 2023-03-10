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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0ZM14 14H2V11H14V14ZM14 10H2V2H14V10ZM6 7H7V8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8V7H10C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5H9V4C9 3.45 8.55 3 8 3C7.45 3 7 3.45 7 4V5H6C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7Z", fill: "currentcolor" }) })));
}
const TableAddRowTopIcon = convertIcon(Icon, 'table-add-row-top');
export default TableAddRowTopIcon;
