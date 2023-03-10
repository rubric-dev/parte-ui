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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M0 14h2V2H0v12Zm6 0h1V2H6v12Zm2 0h1V2H8v12Zm-5 0h2V2H3v12ZM15 2v12h1V2h-1Zm-5 12h1V2h-1v12Zm2 0h2V2h-2v12Z", clipRule: "evenodd" }) })));
}
const MiscellaneousBarcodeIcon = convertIcon(Icon, 'miscellaneous-barcode');
export default MiscellaneousBarcodeIcon;
