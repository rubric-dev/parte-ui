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
    return (_jsx("svg", Object.assign({ width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, rest, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0004 1.00001H15C15.6 1.00001 16 1.50001 16 2.00001V14C16 14.6 15.6 15 15 15H10.0305L10.3162 13H14V11H10.6019L10.7447 10H14V8.00001H11.0305L11.1733 7.00001H14V5.00001H11.459L11.9698 1.42427C11.9902 1.28168 12.0002 1.14 12.0004 1.00001ZM5.96954 1.00001L5.39811 5.00001H2V7.00001H5.1124L4.96954 8.00001H2V10H4.68383L4.54097 11H2V13H4.25526L4.03015 14.5757C4.00978 14.7183 3.9998 14.86 3.99962 15H1C0.4 15 0 14.6 0 14V2.00001C0 1.50001 0.4 1.00001 1 1.00001H5.96954ZM8.01005 0.858584C8.08816 0.31185 8.59469 -0.0680491 9.14142 0.0100558C9.68816 0.0881607 10.0681 0.594693 9.98995 1.14143L7.98995 15.1414C7.91184 15.6882 7.40531 16.0681 6.85858 15.99C6.31184 15.9118 5.93195 15.4053 6.01005 14.8586L8.01005 0.858584Z", fill: "currentcolor" }) })));
}
const TableThDisconnectIcon = convertIcon(Icon, 'table-th-disconnect');
export default TableThDisconnectIcon;
