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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M12.885 13.628a3.968 3.968 0 0 0-.236-.715c-.338-.81-1.054-1.252-2.531-1.882a23.762 23.762 0 0 0-.565-.236c-.198-.084-.339-.14-.47-.207.018-.094.018-.188.028-.291 0-.038.009-.076.009-.123a1.597 1.597 0 0 1-.179-.179c.207-.3.377-.63.508-.988.02-.056.02-.056.029-.094.273-.217.451-.537.555-.904.15-.31.235-.687.198-1.091a1.796 1.796 0 0 0-.349-.97 10.617 10.617 0 0 0-.14-1.45 7.375 7.375 0 0 1-.03-.178c.217-.056.453-.085.679-.085.46 0 .988.15 1.355.433a2.1 2.1 0 0 1 .753 1.101c.028.095.047.198.066.292.066.348.103.885.103 1.252v.047c.132.056.254.198.273.48a.833.833 0 0 1-.122.508c-.047.198-.15.414-.358.452a1.612 1.612 0 0 1-.085.282c0 .01-.009.029-.009.029-.16.414-.405.78-.706 1.044v.132c.028.33-.085.555.781.941.876.386 2.184.79 2.447 1.412.273.621.16.979.16.979h-2.164v.01Zm-1.101-.357c.348.809.207 1.28.207 1.28H.056s-.131-.471.208-1.28c.338-.81 2.004-1.346 3.115-1.845 1.101-.508.988-.81 1.026-1.224 0-.047.01-.103.01-.16-.387-.33-.707-.809-.914-1.364v-.01s-.01-.01-.01-.019c-.037-.113-.084-.244-.112-.367-.264-.047-.414-.338-.47-.602-.057-.113-.18-.367-.151-.668.037-.386.197-.565.367-.64v-.057c0-.48.047-1.186.131-1.637.02-.123.048-.254.085-.377.16-.565.508-1.063.96-1.421.47-.367 1.139-.565 1.732-.565s1.261.198 1.732.565c.451.358.8.856.96 1.43.037.123.066.255.084.377.085.452.132 1.148.132 1.628v.066c.17.075.32.254.348.63.029.302-.084.556-.15.669-.057.264-.198.546-.452.593a2.736 2.736 0 0 1-.113.367c0 .01-.01.038-.01.038a3.592 3.592 0 0 1-.893 1.364v.17c.037.423-.113.725.997 1.223 1.11.5 2.777 1.026 3.116 1.836Z", clipRule: "evenodd" }) })));
}
const InterfacePeopleIcon = convertIcon(Icon, 'interface-people');
export default InterfacePeopleIcon;
