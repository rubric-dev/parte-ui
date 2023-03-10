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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M15.228 14.419c-.433-.988-2.522-1.647-3.915-2.259-1.393-.612-1.205-.988-1.252-1.496-.01-.066-.01-.142-.01-.217.48-.423.867-1.007 1.12-1.675 0 0 .01-.038.02-.047a3.54 3.54 0 0 0 .14-.452c.32-.066.509-.414.575-.734a1.51 1.51 0 0 0 .188-.819c-.047-.47-.235-.687-.442-.772v-.084c0-.593-.057-1.46-.16-2.024a3.456 3.456 0 0 0-1.308-2.221C9.58 1.176 8.744.932 8 .932c-.743 0-1.581.235-2.174.687a3.495 3.495 0 0 0-1.205 1.75 2.81 2.81 0 0 0-.103.471c-.113.565-.16 1.421-.16 2.024v.075c-.226.085-.424.301-.47.781-.03.358.121.678.187.81.076.329.264.677.593.734.038.16.085.31.141.46 0 .01.01.02.01.029l.01.01c.253.677.658 1.27 1.148 1.694 0 .065-.01.131-.01.197-.047.508.094.885-1.29 1.497-1.392.611-3.482 1.27-3.915 2.258-.433.989-.254 1.572-.254 1.572h14.984c-.01.01.17-.574-.264-1.562Z", clipRule: "evenodd" }) })));
}
const InterfacePersonIcon = convertIcon(Icon, 'interface-person');
export default InterfacePersonIcon;
