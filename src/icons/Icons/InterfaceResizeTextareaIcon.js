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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M15.168 4.439 5.835 15.106a.667.667 0 0 1-1.003-.878L14.165 3.56a.667.667 0 1 1 1.003.878Zm.01 6.654-3.333 4a.667.667 0 1 1-1.024-.853l3.334-4a.667.667 0 1 1 1.024.853Z", clipRule: "evenodd" }) })));
}
const InterfaceResizeTextareaIcon = convertIcon(Icon, 'interface-resize-textarea');
export default InterfaceResizeTextareaIcon;
