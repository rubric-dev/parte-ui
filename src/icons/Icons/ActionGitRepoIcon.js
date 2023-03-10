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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 9H4V10H5V9ZM15 0H1C0.45 0 0 0.45 0 1V14C0 14.55 0.45 15 1 15H4V16L6 15L8 16V15H15C15.55 15 16 14.55 16 14V1C16 0.45 15.55 0 15 0ZM4 13H2V12H4V13ZM14 13H8V12H14V13ZM14 11H3V2H14V11ZM5 3H4V4H5V3ZM5 7H4V8H5V7ZM5 5H4V6H5V5Z", fill: "currentcolor" }) })));
}
const ActionGitRepoIcon = convertIcon(Icon, 'action-git-repo');
export default ActionGitRepoIcon;
