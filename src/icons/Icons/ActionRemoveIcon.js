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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.993 6.996H4.997c-.55 0-1 .45-1 1 0 .549.45.999 1 .999h5.996c.55 0 1-.45 1-1s-.45-1-1-1zM7.995 0A7.993 7.993 0 000 7.995a7.993 7.993 0 007.995 7.996 7.993 7.993 0 007.996-7.996A7.993 7.993 0 007.995 0zm0 13.992A6.001 6.001 0 012 7.995 6.001 6.001 0 017.996 2a6.001 6.001 0 015.996 5.996 5.995 5.995 0 01-5.996 5.997z", fill: "currentcolor" }) })));
}
const ActionRemoveIcon = convertIcon(Icon, 'action-remove');
export default ActionRemoveIcon;
