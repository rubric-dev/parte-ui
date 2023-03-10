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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.4 10.1333H0.8C0.36 10.1333 0 10.4933 0 10.9333C0 11.3733 0.36 11.7333 0.8 11.7333H10.4C10.84 11.7333 11.2 11.3733 11.2 10.9333C11.2 10.4933 10.84 10.1333 10.4 10.1333ZM10.4 13.3333H0.8C0.36 13.3333 0 13.6933 0 14.1333C0 14.5733 0.36 14.9333 0.8 14.9333H10.4C10.84 14.9333 11.2 14.5733 11.2 14.1333C11.2 13.6933 10.84 13.3333 10.4 13.3333ZM0.8 5.33334H8C8.44 5.33334 8.8 4.97334 8.8 4.53334C8.8 4.09334 8.44 3.73334 8 3.73334H0.8C0.36 3.73334 0 4.09334 0 4.53334C0 4.97334 0.36 5.33334 0.8 5.33334ZM10.4 6.93334H0.8C0.36 6.93334 0 7.29334 0 7.73334C0 8.17334 0.36 8.53334 0.8 8.53334H10.4C10.84 8.53334 11.2 8.17334 11.2 7.73334C11.2 7.29334 10.84 6.93334 10.4 6.93334ZM15.2 3.73334H13.6V2.13334C13.6 1.69334 13.24 1.33334 12.8 1.33334C12.36 1.33334 12 1.69334 12 2.13334V3.73334H10.4C9.96 3.73334 9.6 4.09334 9.6 4.53334C9.6 4.97334 9.96 5.33334 10.4 5.33334H12V6.93334C12 7.37334 12.36 7.73334 12.8 7.73334C13.24 7.73334 13.6 7.37334 13.6 6.93334V5.33334H15.2C15.64 5.33334 16 4.97334 16 4.53334C16 4.09334 15.64 3.73334 15.2 3.73334Z", fill: "currentcolor" }) })));
}
const ActionSmallCross12Icon = convertIcon(Icon, 'action-small-cross-12');
export default ActionSmallCross12Icon;
