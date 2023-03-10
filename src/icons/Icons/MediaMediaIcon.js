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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M12.226 7.05a.944.944 0 0 0 .941-.942.944.944 0 0 0-.941-.94.944.944 0 0 0-.941.94c0 .518.423.941.94.941Zm2.823-4.706H1.873a.944.944 0 0 0-.941.94v9.412c0 .518.423.942.94.942H15.05a.944.944 0 0 0 .942-.941V3.284a.944.944 0 0 0-.942-.941Zm-.94 8.47L9.401 7.991l-.94 1.882-2.824-3.765-2.824 4.706V4.226h11.294v6.588Z", clipRule: "evenodd" }) })));
}
const MediaMediaIcon = convertIcon(Icon, 'media-media');
export default MediaMediaIcon;
