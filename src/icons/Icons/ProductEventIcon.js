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
    return (_jsxs("svg", Object.assign({ width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: [_jsx("rect", { width: 32, height: 32, rx: 16, fill: "#E7E4F9" }), _jsx("path", { d: "M22.333 9.667H9.666c-.874 0-1.583.709-1.583 1.583v7.917c0 .874.709 1.583 1.583 1.583h12.667c.875 0 1.583-.709 1.583-1.583V11.25c0-.874-.709-1.583-1.583-1.583zM12.833 23.917h6.333M16 20.75v3.167", stroke: "#6E62B6", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })] })));
}
const ProductEventIcon = convertIcon(Icon, 'product-event');
export default ProductEventIcon;
