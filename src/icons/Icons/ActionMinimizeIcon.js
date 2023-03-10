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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.52 1.87294C15.52 1.35529 15.0965 0.931763 14.5788 0.931763C14.3153 0.931763 14.08 1.03529 13.9106 1.2047L10.8141 4.30117V2.81412C10.8141 2.29647 10.3906 1.87294 9.87293 1.87294C9.35529 1.87294 8.93176 2.29647 8.93176 2.81412V6.57882C8.93176 7.09647 9.35529 7.52 9.87293 7.52H13.6376C14.1553 7.52 14.5788 7.09647 14.5788 6.57882C14.5788 6.06117 14.1553 5.63765 13.6376 5.63765H12.1412L15.2471 2.54117C15.4165 2.37176 15.52 2.13647 15.52 1.87294ZM6.10823 9.40235H2.34352C1.82588 9.40235 1.40235 9.82588 1.40235 10.3435C1.40235 10.8612 1.82588 11.2847 2.34352 11.2847H3.83999L0.743522 14.3812C0.57411 14.5506 0.470581 14.7859 0.470581 15.0494C0.470581 15.5671 0.89411 15.9906 1.41176 15.9906C1.67529 15.9906 1.91058 15.8871 2.07999 15.7176L5.17646 12.6212V14.1176C5.17646 14.6353 5.59999 15.0588 6.11764 15.0588C6.63529 15.0588 7.05882 14.6353 7.05882 14.1176V10.3529C7.0494 9.82588 6.62588 9.40235 6.10823 9.40235Z", fill: "currentcolor" }) })));
}
const ActionMinimizeIcon = convertIcon(Icon, 'action-minimize');
export default ActionMinimizeIcon;
