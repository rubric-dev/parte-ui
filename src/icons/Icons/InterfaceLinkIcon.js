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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M5.638 12.226a.938.938 0 0 0 .668-.273l5.647-5.647a.944.944 0 0 0-1.336-1.336l-5.648 5.647a.944.944 0 0 0 .668 1.61Zm3.623-1.901L6.965 12.62l-.942.941-.009-.01c-.339.34-.8.566-1.318.566a1.888 1.888 0 0 1-1.882-1.883c0-.517.226-.978.565-1.317l-.01-.01.941-.94L6.607 7.67a3.28 3.28 0 0 0-.97-.151 3.705 3.705 0 0 0-2.644 1.12l-.019-.019-.941.941.019.02a3.705 3.705 0 0 0-1.12 2.644 3.764 3.764 0 0 0 3.764 3.765 3.705 3.705 0 0 0 2.645-1.12l.019.018.941-.94-.019-.02a3.705 3.705 0 0 0 1.12-2.644c0-.33-.056-.65-.141-.96Zm6.73-5.629A3.764 3.764 0 0 0 12.226.932a3.705 3.705 0 0 0-2.645 1.12l-.019-.02-.94.942.018.019c-.678.678-1.12 1.61-1.12 2.645 0 .338.056.65.141.96L9.958 4.3l.94-.941.01.01c.339-.34.8-.565 1.318-.565 1.035 0 1.882.847 1.882 1.882 0 .518-.226.979-.565 1.318l.01.01-.941.94-2.287 2.306c.31.085.63.141.96.141a3.705 3.705 0 0 0 2.644-1.12l.02.02.94-.942-.018-.019a3.689 3.689 0 0 0 1.12-2.645Z", clipRule: "evenodd" }) })));
}
const InterfaceLinkIcon = convertIcon(Icon, 'interface-link');
export default InterfaceLinkIcon;
