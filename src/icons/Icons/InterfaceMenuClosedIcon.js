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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M15.05 7.05H6.578a.944.944 0 0 0-.941.94c0 .518.423.942.94.942h8.471a.944.944 0 0 0 .942-.941.944.944 0 0 0-.942-.942ZM3.754 5.166a.938.938 0 0 0-.668.273L1.205 7.322a.955.955 0 0 0 0 1.336l1.882 1.883a.944.944 0 0 0 1.61-.668V6.108a.944.944 0 0 0-.942-.94Zm2.824-.941h8.47a.944.944 0 0 0 .942-.941.944.944 0 0 0-.942-.941H6.58a.944.944 0 0 0-.941.94c0 .518.423.942.94.942Zm8.47 7.53H6.58a.944.944 0 0 0-.941.94c0 .518.423.942.94.942h8.471a.944.944 0 0 0 .942-.941.944.944 0 0 0-.942-.942Z", clipRule: "evenodd" }) })));
}
const InterfaceMenuClosedIcon = convertIcon(Icon, 'interface-menu-closed');
export default InterfaceMenuClosedIcon;
