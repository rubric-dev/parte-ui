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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M12 10c-.3 0-.5.1-.7.3L9 12.6V3.4l2.3 2.3c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7l-4-4C8.5.1 8.3 0 8 0c-.3 0-.5.1-.7.3l-4 4c-.2.2-.3.4-.3.7 0 .6.5 1 1 1 .3 0 .5-.1.7-.3L7 3.4v9.2l-2.3-2.3c-.2-.2-.4-.3-.7-.3-.5 0-1 .4-1 1 0 .3.1.5.3.7l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l4-4c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1Z", clipRule: "evenodd" }) })));
}
const InterfaceArrowsVerticalIcon = convertIcon(Icon, 'interface-arrow-vertical');
export default InterfaceArrowsVerticalIcon;
