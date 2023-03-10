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
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: [_jsx("path", { d: "M8 5.333c3.314 0 6-.895 6-2 0-1.104-2.686-2-6-2s-6 .896-6 2c0 1.105 2.686 2 6 2zM14 8c0 1.107-2.667 2-6 2s-6-.893-6-2", stroke: "currentcolor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M2 3.333v9.334c0 1.106 2.667 2 6 2s6-.894 6-2V3.333", stroke: "currentcolor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })] })));
}
const ProductDatabaseIcon = convertIcon(Icon, 'product-database');
export default ProductDatabaseIcon;
