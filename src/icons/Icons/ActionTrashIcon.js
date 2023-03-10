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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.1082 4.69647H1.87293C1.6094 4.69647 1.40234 4.90353 1.40234 5.16706C1.40234 5.43059 1.6094 5.63765 1.87293 5.63765H2.34352V15.0494C2.34352 15.5671 2.76705 15.9906 3.2847 15.9906H12.6965C13.2141 15.9906 13.6376 15.5671 13.6376 15.0494V5.63765H14.1082C14.3718 5.63765 14.5788 5.43059 14.5788 5.16706C14.5788 4.90353 14.3718 4.69647 14.1082 4.69647ZM6.10823 13.1671C6.10823 13.6847 5.6847 14.1082 5.16705 14.1082C4.6494 14.1082 4.22587 13.6847 4.22587 13.1671V7.52C4.22587 7.00235 4.6494 6.57882 5.16705 6.57882C5.6847 6.57882 6.10823 7.00235 6.10823 7.52V13.1671ZM8.93176 13.1671C8.93176 13.6847 8.50823 14.1082 7.99058 14.1082C7.47293 14.1082 7.0494 13.6847 7.0494 13.1671V7.52C7.0494 7.00235 7.47293 6.57882 7.99058 6.57882C8.50823 6.57882 8.93176 7.00235 8.93176 7.52V13.1671ZM11.7553 13.1671C11.7553 13.6847 11.3318 14.1082 10.8141 14.1082C10.2965 14.1082 9.87293 13.6847 9.87293 13.1671V7.52C9.87293 7.00235 10.2965 6.57882 10.8141 6.57882C11.3318 6.57882 11.7553 7.00235 11.7553 7.52V13.1671ZM13.6376 1.87294H9.87293C9.87293 1.35529 9.4494 0.931763 8.93176 0.931763H7.0494C6.53176 0.931763 6.10823 1.35529 6.10823 1.87294H2.34352C1.82587 1.87294 1.40234 2.29647 1.40234 2.81412V3.75529H14.5788V2.81412C14.5788 2.29647 14.1553 1.87294 13.6376 1.87294Z", fill: "currentcolor" }) })));
}
const ActionTrashIcon = convertIcon(Icon, 'action-trash');
export default ActionTrashIcon;
