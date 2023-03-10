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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.2873 5.95809C13.8163 5.79939 14.1165 5.24191 13.9578 4.71292C13.7991 4.18392 13.2416 3.88374 12.7126 4.04244L2.71263 7.04244C1.76243 7.3275 1.76243 8.67303 2.71263 8.95809L12.7126 11.9581C13.2416 12.1168 13.7991 11.8166 13.9578 11.2876C14.1165 10.7586 13.8163 10.2011 13.2873 10.0424L6.48008 8.00026L13.2873 5.95809Z", fill: "currentcolor" }) })));
}
const ActionLessThanIcon = convertIcon(Icon, 'action-less-than');
export default ActionLessThanIcon;
