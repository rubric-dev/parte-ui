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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3ZM15 13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13ZM15 9H1C0.45 9 0 9.45 0 10C0 10.55 0.45 11 1 11H15C15.55 11 16 10.55 16 10C16 9.45 15.55 9 15 9ZM15 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7H15C15.55 7 16 6.55 16 6C16 5.45 15.55 5 15 5Z", fill: "currentcolor" }) })));
}
const TableListIcon = convertIcon(Icon, 'table-list');
export default TableListIcon;
