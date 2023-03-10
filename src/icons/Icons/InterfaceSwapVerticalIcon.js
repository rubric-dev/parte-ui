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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M4.424 1.704a.932.932 0 0 0-.66-.273.955.955 0 0 0-.668.273L.273 4.518a.944.944 0 0 0 1.336 1.336L2.824 4.64v9.007c0 .518.423.941.94.941a.944.944 0 0 0 .942-.94V4.64L5.92 5.854c.17.17.405.273.659.273a.944.944 0 0 0 .668-1.61L4.424 1.705Zm9.694 8.169a.938.938 0 0 0-.669.273l-1.214 1.214V2.353a.944.944 0 0 0-.94-.941.944.944 0 0 0-.942.94v9.008l-1.214-1.214a.932.932 0 0 0-.659-.273.944.944 0 0 0-.668 1.61l2.823 2.813c.17.17.405.273.668.273a.938.938 0 0 0 .669-.273l2.823-2.814a.938.938 0 0 0 .273-.668.958.958 0 0 0-.95-.941Z", clipRule: "evenodd" }) })));
}
const InterfaceSwapVerticalIcon = convertIcon(Icon, 'interface-swap-vertical');
export default InterfaceSwapVerticalIcon;
