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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.995 0A7.993 7.993 0 000 7.995a7.993 7.993 0 007.995 7.996 7.993 7.993 0 007.996-7.996A7.993 7.993 0 007.995 0zm3.708 9.704l-2.998 2.998c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29L4.288 9.704a1.002 1.002 0 011.42-1.42l1.289 1.29V3.998c0-.55.45-1 1-1 .549 0 .999.45.999 1v5.586l1.289-1.289a1.002 1.002 0 011.709.71c0 .27-.11.52-.29.7z", fill: "currentcolor" }) })));
}
const ActionDownloadIcon = convertIcon(Icon, 'action-download');
export default ActionDownloadIcon;
