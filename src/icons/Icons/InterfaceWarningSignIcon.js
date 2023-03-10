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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "m15.85 13.177.009-.01L9.27 1.873l-.01.01a.91.91 0 0 0-.8-.471.922.922 0 0 0-.8.47l-.01-.01-6.587 11.295.009.01a.892.892 0 0 0-.141.47c0 .518.423.941.94.941H15.05a.944.944 0 0 0 .942-.94.892.892 0 0 0-.142-.471Zm-6.448-.48H7.52v-1.883h1.882v1.883Zm0-2.824H7.52V5.167h1.882v4.706Z", clipRule: "evenodd" }) })));
}
const InterfaceWarningSignIcon = convertIcon(Icon, 'interface-warning-sign');
export default InterfaceWarningSignIcon;
