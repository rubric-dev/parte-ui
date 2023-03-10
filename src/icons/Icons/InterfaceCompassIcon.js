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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M12 8c0 .14-.03.27-.08.39l-3 6.99c-.15.37-.51.62-.92.62-.41 0-.77-.25-.92-.61l-3-6.99a1.006 1.006 0 0 1 0-.79l3-6.99C7.23.25 7.59 0 8 0c.41 0 .77.25.92.61l3 6.99c.05.13.08.26.08.4ZM8 3.54 6.09 8h3.82L8 3.54Z", clipRule: "evenodd" }) })));
}
const InterfaceCompassIcon = convertIcon(Icon, 'interface-compass');
export default InterfaceCompassIcon;
