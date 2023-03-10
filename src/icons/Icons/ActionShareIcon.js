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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.285 14.108H2.814v-8.47h4.48l1.882-1.883H1.873a.944.944 0 00-.941.941V15.05c0 .518.423.942.94.942h10.354a.944.944 0 00.94-.942V7.755l-1.881 1.883v4.47zM15.049.932h-4.706a.944.944 0 00-.94.94c0 .519.423.942.94.942h2.438L7.802 7.793a.94.94 0 00-.282.668.944.944 0 001.61.668l4.978-4.978v2.437c0 .518.424.941.941.941a.944.944 0 00.942-.94V1.881a.946.946 0 00-.942-.95z", fill: "currentcolor" }) })));
}
const ActionShareIcon = convertIcon(Icon, 'action-share');
export default ActionShareIcon;
