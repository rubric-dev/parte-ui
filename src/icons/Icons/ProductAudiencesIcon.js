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
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: [_jsx("rect", { width: 32, height: 32, rx: 16, fill: "#E7E4F9" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.924 8.824c0 1.243.984 2.25 2.196 2.25 1.213 0 2.197-1.007 2.197-2.25 0-1.242-.984-2.25-2.197-2.25-1.212 0-2.196 1.008-2.196 2.25zm-3.66 6v6h1.464v1.5c0 .415-.328.75-.732.75H9.532a.742.742 0 01-.732-.75v-3.75H7.336v-4.5c0-.829.655-1.5 1.464-1.5h2.215a3.767 3.767 0 00-.75 2.25zm7.32 9.75h-2.927a.742.742 0 01-.733-.75v-4.5h-2.196v-4.5c0-1.243.983-2.25 2.196-2.25h4.393c1.212 0 2.196 1.007 2.196 2.25v4.5h-2.197v4.5c0 .414-.327.75-.732.75zM8.8 10.324c0 .829.656 1.5 1.464 1.5.81 0 1.465-.671 1.465-1.5 0-.828-.656-1.5-1.464-1.5-.81 0-1.465.672-1.465 1.5zm13.176 10.5v-6c0-.847-.285-1.621-.75-2.25h2.215c.808 0 1.464.671 1.464 1.5v4.5H23.44v3.75c0 .415-.328.75-.732.75h-1.464a.742.742 0 01-.732-.75v-1.5h1.463zm1.465-10.5c0 .829-.656 1.5-1.465 1.5-.808 0-1.464-.671-1.464-1.5 0-.828.656-1.5 1.464-1.5.81 0 1.465.672 1.465 1.5z", fill: "#6E62B6" })] })));
}
const ProductAudiencesIcon = convertIcon(Icon, 'product-audiences');
export default ProductAudiencesIcon;
