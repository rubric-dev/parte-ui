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
    return (_jsxs("svg", Object.assign({ width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: [_jsx("rect", { width: 32, height: 32, rx: 16, fill: "#E7E4F9" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.228 21.419c-.433-.988-2.522-1.647-3.915-2.259-1.393-.612-1.205-.988-1.252-1.497-.01-.065-.01-.14-.01-.216.48-.424.867-1.007 1.12-1.675 0 0 .01-.038.02-.047.056-.141.103-.301.14-.452.32-.066.509-.414.575-.734a1.51 1.51 0 00.188-.819c-.047-.47-.235-.687-.442-.772v-.085c0-.592-.057-1.458-.16-2.023a3.456 3.456 0 00-1.308-2.221c-.603-.443-1.44-.687-2.184-.687-.743 0-1.581.235-2.174.687a3.496 3.496 0 00-1.205 1.75c-.047.16-.085.311-.103.471-.113.565-.16 1.421-.16 2.024v.075c-.226.085-.424.301-.47.781-.03.358.121.678.187.81.076.329.264.677.593.734.038.16.085.31.142.46 0 .01.009.02.009.029l.01.01c.253.677.658 1.27 1.147 1.693 0 .066-.009.132-.009.198-.047.508.094.885-1.29 1.497-1.392.611-3.482 1.27-3.915 2.258-.433.989-.254 1.572-.254 1.572h14.984c-.01.01.17-.574-.264-1.562z", fill: "#6E62B6" })] })));
}
const ProductUserIcon = convertIcon(Icon, 'product-user');
export default ProductUserIcon;