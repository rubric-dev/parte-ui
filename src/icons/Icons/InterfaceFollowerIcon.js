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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M9.76 12.414c-1.13-.499-.979-.8-1.017-1.214-.009-.056-.009-.113-.009-.179.386-.348.706-.819.913-1.355 0 0 .01-.028.01-.038.046-.122.084-.244.112-.367.264-.056.415-.339.47-.593.057-.103.18-.367.151-.659-.037-.376-.188-.555-.357-.63v-.066c0-.49-.047-1.186-.132-1.638a2.56 2.56 0 0 0-.085-.404 2.842 2.842 0 0 0-.978-1.422c-.49-.367-1.167-.555-1.78-.555-.602 0-1.28.188-1.76.555a2.84 2.84 0 0 0-.987 1.422 2.707 2.707 0 0 0-.085.376 10.605 10.605 0 0 0-.132 1.647v.057c-.179.065-.339.244-.376.64-.029.291.094.555.15.658.057.264.217.556.48.603a3.354 3.354 0 0 0 .132.386v.01a3.36 3.36 0 0 0 .932 1.373c0 .057-.01.113-.01.16-.037.414.076.716-1.054 1.214-1.13.5-2.833 1.036-3.181 1.836-.348.828-.207 1.298-.207 1.298h12.198s.14-.47-.207-1.28c-.358-.8-2.062-1.336-3.191-1.835Zm5.958-9.788L13.835.744A.944.944 0 0 0 12.5 2.08l.282.273h-2.438a.944.944 0 0 0-.94.941c0 .518.423.941.94.941h2.429l-.273.273a.944.944 0 0 0 1.336 1.336l1.883-1.882a.938.938 0 0 0 .273-.668.938.938 0 0 0-.273-.668Z", clipRule: "evenodd" }) })));
}
const InterfaceFollowerIcon = convertIcon(Icon, 'interface-follower');
export default InterfaceFollowerIcon;
