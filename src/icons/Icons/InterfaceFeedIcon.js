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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M2.814 12.226a1.888 1.888 0 0 0-1.882 1.882c0 1.035.847 1.883 1.882 1.883a1.882 1.882 0 1 0 0-3.765Zm.941-3.765a.944.944 0 0 0-.94.941c0 .518.423.942.94.942a2.82 2.82 0 0 1 2.824 2.823c0 .518.423.941.941.941a.944.944 0 0 0 .941-.94A4.708 4.708 0 0 0 3.755 8.46Zm0-3.765a.944.944 0 0 0-.94.942c0 .517.423.94.94.94a6.583 6.583 0 0 1 6.588 6.59c0 .517.424.94.942.94a.944.944 0 0 0 .94-.94 8.471 8.471 0 0 0-8.47-8.472Zm0-3.764a.944.944 0 0 0-.94.94c0 .519.423.942.94.942 5.723 0 10.353 4.63 10.353 10.353 0 .518.424.941.941.941a.944.944 0 0 0 .942-.94C15.99 6.408 10.513.931 3.755.931Z", clipRule: "evenodd" }) })));
}
const InterfaceFeedIcon = convertIcon(Icon, 'interface-feed');
export default InterfaceFeedIcon;
