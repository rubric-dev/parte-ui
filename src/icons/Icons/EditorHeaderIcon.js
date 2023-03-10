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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M13 1c-.55 0-1 .45-1 1v5H4V2c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V9h8v5c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1Z", clipRule: "evenodd" }) })));
}
const EditorHeaderIcon = convertIcon(Icon, 'editor-header');
export default EditorHeaderIcon;
