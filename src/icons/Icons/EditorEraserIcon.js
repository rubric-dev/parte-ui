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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "m8.057 13.092 7.18-7.003a.95.95 0 0 0 0-1.364L10.693.282a1.012 1.012 0 0 0-1.402 0L.763 8.592a.95.95 0 0 0 0 1.366l5.251 5.12h7.643v-.01a.944.944 0 0 0 .94-.94.944.944 0 0 0-.94-.942H7.963l.094-.094Zm-2.043.056L2.043 9.271l3.971-3.869 3.972 3.869-3.972 3.877Z", clipRule: "evenodd" }) })));
}
const EditorEraserIcon = convertIcon(Icon, 'editor-eraser');
export default EditorEraserIcon;
