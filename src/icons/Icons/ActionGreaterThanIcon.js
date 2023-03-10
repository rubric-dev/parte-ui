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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.71267 5.95783C2.18368 5.79913 1.8835 5.24165 2.04219 4.71266C2.20089 4.18366 2.75837 3.88348 3.28737 4.04218L13.2874 7.04218C14.2376 7.32724 14.2376 8.67277 13.2874 8.95783L3.28737 11.9578C2.75837 12.1165 2.20089 11.8163 2.04219 11.2874C1.8835 10.7584 2.18368 10.2009 2.71267 10.0422L9.51992 8L2.71267 5.95783Z", fill: "currentcolor" }) })));
}
const ActionGreaterThanIcon = convertIcon(Icon, 'action-greater-than');
export default ActionGreaterThanIcon;
