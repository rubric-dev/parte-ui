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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M10.36 10.118V6.824c0-.084.02-.162.048-.236H3.3c-.165 0-.057-.776 0-.941l.687-1.535c.057-.166.089-.348.254-.348h4.236V1.892c-.157-.003-.302-.01-.47-.01-2.561 0-3.8.378-3.8.378-.478.146-1.015.67-1.194 1.165l-.718 1.993h-.99c-.456 0-.828.397-.828.883s.372.884.828.884h.353l-.24.344c-.032.645 0 1.352 0 1.883v4.706c0 .618.361.94.941.94s.941-.322.941-.94v-.942h9.412v.942c0 .618.361.94.94.94.58 0 .942-.322.942-.94v-3.295h-3.53a.706.706 0 0 1-.705-.705Zm-5.176.235H3.3V8.47h1.883v1.883Zm9.724-8.634a2.643 2.643 0 0 0-.878-.564c-.364-.15-.817-.226-1.36-.226-.42 0-.801.072-1.141.215-.34.143-.631.343-.873.598a2.76 2.76 0 0 0-.562.906 3.38 3.38 0 0 0-.205 1.078v.039h1.684c.002-.196.021-.382.064-.553.046-.182.117-.341.213-.477.095-.135.218-.244.367-.325a1.1 1.1 0 0 1 .534-.122c.305 0 .544.085.716.256.173.17.259.433.259.79a.963.963 0 0 1-.11.522c-.08.14-.185.268-.315.384-.13.116-.271.232-.424.348a2.9 2.9 0 0 0-.436.413c-.138.158-.259.35-.362.575a2.406 2.406 0 0 0-.19.836v.176h1.55v-.095c.03-.232.105-.425.224-.58.118-.155.254-.293.407-.413.153-.12.315-.24.487-.36a2.27 2.27 0 0 0 .826-1.051c.096-.24.144-.546.144-.918a2.109 2.109 0 0 0-.62-1.452Zm-3.136 5.81v1.883h1.882V7.529h-1.882Z", clipRule: "evenodd" }) })));
}
const InterfaceUnknownVehicleIcon = convertIcon(Icon, 'interface-unknown-vehicle');
export default InterfaceUnknownVehicleIcon;
