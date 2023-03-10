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
import * as Styled from './Link.styled';
const Link = (_a) => {
    var { disabled, children } = _a, props = __rest(_a, ["disabled", "children"]);
    return disabled ? (_jsx(Styled.DisabledLink, { children: children })) : (_jsx(Styled.Link, Object.assign({}, props, { children: children })));
};
export default Link;
