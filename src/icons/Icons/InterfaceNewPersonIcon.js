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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M10.12 12.69c-1.17-.53-1.01-.85-1.05-1.29-.01-.06-.01-.12-.01-.19.4-.37.73-.87.94-1.44 0 0 .01-.03.01-.04.05-.14.09-.27.12-.4.27-.06.43-.36.49-.63.06-.11.19-.39.16-.7-.04-.41-.2-.6-.38-.68v-.07c0-.51-.05-1.25-.14-1.74-.02-.13-.05-.27-.09-.4-.17-.6-.53-1.14-1.01-1.52C8.66 3.2 7.96 3 7.33 3c-.62 0-1.33.2-1.82.59-.49.38-.85.92-1.02 1.52-.04.13-.07.26-.09.4-.09.49-.13 1.23-.13 1.74v.06c-.19.08-.35.27-.39.68-.03.31.1.59.16.7.06.28.22.59.5.64.03.14.07.27.11.4 0 .01.01.02.01.02v.01c.22.59.55 1.1.96 1.46 0 .06-.01.12-.01.17-.04.44.08.76-1.09 1.29-1.17.53-2.93 1.1-3.29 1.95-.35.87-.2 1.37-.2 1.37h12.6s.15-.5-.22-1.36c-.36-.85-2.12-1.42-3.29-1.95ZM15.89 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1Z", clipRule: "evenodd" }) })));
}
const InterfaceNewPersonIcon = convertIcon(Icon, 'interface-new-person');
export default InterfaceNewPersonIcon;
