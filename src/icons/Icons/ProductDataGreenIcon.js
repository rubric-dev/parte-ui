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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { convertIcon } from '../component/Icon';
function Icon(_a) {
    var { size } = _a, rest = __rest(_a, ["size"]);
    return (_jsxs("svg", Object.assign({ width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: [_jsx("rect", { width: 32, height: 32, rx: 16, fill: "#F5FBF8" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 24c4.667-3.048 7-7.238 7-12.571-1.556 0-3.889-1.143-7-3.429-3.111 2.286-5.444 3.429-7 3.429 0 5.333 2.333 9.523 7 12.571zm0-13.879c2.005 1.388 3.715 2.304 5.186 2.736-.342 3.701-2.05 6.682-5.186 9.037V10.121z", fill: "#52BD95" })] })));
}
const ProductDataGreenIcon = convertIcon(Icon, 'product-data-green');
export default ProductDataGreenIcon;
