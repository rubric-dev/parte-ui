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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 3C1 1.89543 1.89543 1 3 1H7.58425C8.11468 1 8.62339 1.21071 8.99846 1.58579L14.4111 6.99846C15.1922 7.77951 15.1922 9.04584 14.4111 9.82689L9.82689 14.4111C9.04584 15.1922 7.77951 15.1922 6.99846 14.4111L1.58579 8.99846C1.21071 8.62339 1 8.11468 1 7.58425V3ZM4.48702 2.99258C3.66167 2.99258 2.99258 3.66167 2.99258 4.48702C2.99258 5.31238 3.66167 5.98146 4.48702 5.98146C5.31238 5.98146 5.98146 5.31238 5.98146 4.48702C5.98146 3.66167 5.31238 2.99258 4.48702 2.99258Z", fill: "currentcolor" }) })));
}
const ActionTagIcon = convertIcon(Icon, 'action-tag');
export default ActionTagIcon;
