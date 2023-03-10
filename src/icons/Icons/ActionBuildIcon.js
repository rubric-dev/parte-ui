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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9553 12.6212L7.71766 6.58824L8.72472 5.55295C9.04472 5.23295 8.61178 4.96 8.83766 4.36706C9.6659 2.32471 12.0471 2.1553 12.0471 2.1553C12.0471 2.1553 12.3859 1.80706 12.7153 1.47765C9.63766 0.178828 7.55766 1.44 6.6259 2.25883L3.40707 5.55295L2.73884 6.23059C2.37178 6.60706 2.37178 7.21883 2.73884 7.5953L2.08001 8.27295C1.71296 7.89647 1.12001 7.89647 0.752955 8.27295C0.385896 8.64942 0.385896 9.26118 0.752955 9.63765L2.08001 11.0024C2.44707 11.3788 3.04001 11.3788 3.40707 11.0024C3.77413 10.6259 3.77413 10.0141 3.40707 9.63765L4.07531 8.96C4.44237 9.33647 5.03531 9.33647 5.40237 8.96L6.15531 8.18824L12.1694 15.4071C12.9412 16.1788 14.1835 16.1788 14.9553 15.4071C15.7177 14.6353 15.7177 13.3835 14.9553 12.6212Z", fill: "currentcolor" }) })));
}
const ActionBuildIcon = convertIcon(Icon, 'action-build');
export default ActionBuildIcon;
