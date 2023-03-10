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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M10.392 10.647A3.002 3.002 0 0 1 6.16 8.995H3.37l1.338 1.318a.95.95 0 0 1 .282.683c-.01.536-.524.995-.99.995-.465 0-.63-.187-.747-.294L.281 8.682A.956.956 0 0 1 0 7.994a.971.971 0 0 1 .294-.687l3.01-3.028a.973.973 0 0 1 .697-.27c.536.01.998.485.989 1.021a.971.971 0 0 1-.295.687L3.37 6.997h2.79a3.002 3.002 0 0 1 4.106-1.716l2.416-2.277-1.732.004a.99.99 0 0 1-.679-.329.978.978 0 0 1 .05-1.378c.199-.186.459-.315.714-.3l4.012.005a.96.96 0 0 1 .68.3.97.97 0 0 1 .264.699L15.99 6.05a.973.973 0 0 1-.314.679 1.03 1.03 0 0 1-1.421-.048.97.97 0 0 1-.265-.699V4.29l-2.34 2.312c.219.416.343.89.343 1.394 0 .451-.1.88-.279 1.263L14 11.68l-.004-1.73a.982.982 0 0 1 .323-.68.978.978 0 0 1 1.378.049c.187.2.316.46.3.714l-.005 4.011a.983.983 0 0 1-.299.691.971.971 0 0 1-.7.265l-4.046-.001a.988.988 0 0 1-.679-.326 1.017 1.017 0 0 1 .048-1.41.971.971 0 0 1 .699-.265h1.693l-2.315-2.35Z", clipRule: "evenodd" }) })));
}
const DataFlowReviewBranchIcon = convertIcon(Icon, 'data-flow-review-branch');
export default DataFlowReviewBranchIcon;
