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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.0771 15.3371 11 14.8909 11 14V8C11 7.1091 12.0771 6.66293 12.7071 7.29289L15.7071 10.2929ZM12 2C12 2.28 11.89 2.53 11.71 2.7L8 6.41V10C8 10.28 7.89 10.53 7.71 10.71L5.71 12.71C5.53 12.89 5.28 13 5 13C4.45 13 4 12.55 4 12V6.41L0.29 2.71C0.11 2.53 0 2.28 0 2C0 1.45 0.45 1 1 1H11C11.55 1 12 1.45 12 2Z", fill: "currentcolor" }) })));
}
const ActionFilterOpenIcon = convertIcon(Icon, 'action-filter-open');
export default ActionFilterOpenIcon;
