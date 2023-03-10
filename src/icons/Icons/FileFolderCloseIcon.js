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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M.932 13.647c0 .518.423.941.94.941H15.05a.944.944 0 0 0 .942-.94v-6.59H.93v6.59Zm14.117-9.412H7.915l-1.61-1.6a.909.909 0 0 0-.667-.282H1.873a.944.944 0 0 0-.941.941v2.824H15.99v-.942a.944.944 0 0 0-.942-.94Z", clipRule: "evenodd" }) })));
}
const FileFolderCloseIcon = convertIcon(Icon, 'file-folder-close');
export default FileFolderCloseIcon;
