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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M14 7H8.65c-.38-.09-.73-.18-1.04-.26-.31-.08-.49-.13-.54-.14-.43-.11-.79-.29-1.05-.52-.27-.23-.4-.55-.4-.95 0-.29.07-.53.21-.72.14-.19.32-.34.54-.46.22-.11.46-.19.72-.24.26-.05.52-.07.77-.07.74 0 1.36.15 1.84.46.32.2.55.5.68.9h2.22c-.06-.33-.17-.64-.32-.92-.25-.45-.59-.84-1.02-1.15-.43-.31-.93-.54-1.49-.7C9.21 2.07 8.59 2 7.95 2c-.55 0-1.1.07-1.63.2-.54.13-1.02.34-1.45.62-.42.28-.76.63-1.02 1.05-.26.42-.39.92-.39 1.5 0 .3.04.59.13.88.08.26.21.51.39.75H2c-.55 0-1 .45-1 1s.45 1 1 1h7.13c.25.07.49.14.71.22.25.09.48.23.7.44.21.21.32.53.32.97 0 .21-.05.43-.14.63-.09.21-.24.39-.45.55-.21.16-.48.29-.81.39-.33.1-.73.15-1.2.15-.44 0-.84-.05-1.21-.14-.37-.09-.7-.24-.99-.43-.29-.2-.51-.45-.67-.76-.01 0-.01-.01-.02-.02H3.14a3.68 3.68 0 0 0 1.39 2.03c.46.34 1 .58 1.62.74.61.15 1.27.23 1.97.23.61 0 1.2-.07 1.79-.2.58-.13 1.11-.34 1.56-.63.46-.29.83-.66 1.11-1.11.28-.45.42-1 .42-1.64 0-.3-.05-.6-.15-.9-.05-.19-.13-.36-.22-.52H14c.55 0 1-.45 1-1s-.45-1-1-1Z", clipRule: "evenodd" }) })));
}
const EditorStrikethroughIcon = convertIcon(Icon, 'editor-strikethrough');
export default EditorStrikethroughIcon;
