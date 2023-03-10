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
    return (_jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 16 16" }, rest, { children: _jsx("path", { fill: "currentcolor", fillRule: "evenodd", d: "M13 12h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1ZM10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2Zm0 4H7v3h3V6Zm5-4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V2Zm0 3h-3v2h3V5ZM5 5H2v3h3V5Zm-2 7h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1Zm12 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1ZM5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h3V2Zm3 10h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1Z", clipRule: "evenodd" }) })));
}
const DataFullStackedChartIcon = convertIcon(Icon, 'data-full-stacked-chart');
export default DataFullStackedChartIcon;
