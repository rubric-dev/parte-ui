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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1ZM6 14H4v-2h2v2Zm0-3H4V9h2v2Zm0-3H4V6h2v2Zm3 6H7v-2h2v2Zm0-3H7V9h2v2Zm0-3H7V6h2v2Zm3 6h-2V9h2v5Zm0-6h-2V6h2v2Zm0-3H4V2h8v3Z", clipRule: "evenodd" }) })));
}
const MiscellaneousCalculatorIcon = convertIcon(Icon, 'miscellaneous-calculator');
export default MiscellaneousCalculatorIcon;
