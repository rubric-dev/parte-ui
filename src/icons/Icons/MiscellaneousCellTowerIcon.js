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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentColor", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M4.442 2.07A.958.958 0 0 0 4.423.735C4.056.367 3.454.386 3.087.753c-2.87 2.936-2.87 7.793 0 10.73a.937.937 0 1 0 1.346-1.309c-2.146-2.212-2.146-5.901.01-8.103Zm4.941 4.763a.21.21 0 0 0-.03-.072.389.389 0 0 1-.05-.121.823.823 0 0 0-.023-.07.906.906 0 0 0 .132-.452.944.944 0 0 0-.941-.942.944.944 0 0 0-.942.942c0 .169.057.32.132.451a.284.284 0 0 0-.03.085c-.005.019-.01.038-.017.057a.387.387 0 0 1-.026.05.23.23 0 0 0-.03.072l-1.883 7.53a.936.936 0 0 0 .687 1.138.936.936 0 0 0 1.14-.687l.526-2.108h.885l.527 2.108a.94.94 0 0 0 1.826-.452l-1.883-7.53Zm1.158-3.162a.944.944 0 0 1 1.318-.189c1.346 1.007 1.534 3.99.037 5.243a.95.95 0 0 1-1.327-.123.95.95 0 0 1 .123-1.327c.536-.442.442-1.986.037-2.287a.944.944 0 0 1-.188-1.317ZM13.854.753a.938.938 0 0 0-1.327-.019.958.958 0 0 0-.028 1.337c2.155 2.202 2.155 5.891 0 8.094a.929.929 0 0 0 .019 1.327.937.937 0 0 0 1.327-.02c2.87-2.926 2.87-7.783.01-10.72ZM5.986 4.988c-.405.301-.499 1.845.037 2.287a.95.95 0 0 1 .123 1.327.942.942 0 0 1-1.327.123C3.322 7.473 3.5 4.489 4.856 3.482a.944.944 0 0 1 1.318.189.944.944 0 0 1-.188 1.317Z", clipRule: "evenodd" }) })));
}
const MiscellaneousCellTowerIcon = convertIcon(Icon, 'miscellaneous-cell-tower');
export default MiscellaneousCellTowerIcon;
