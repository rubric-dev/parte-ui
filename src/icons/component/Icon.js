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
import React from 'react';
import { COLORS } from '../../@foundations/Colors';
export const IconColor = {
    default: COLORS.N700,
    muted: COLORS.N600,
    disabled: COLORS.N400,
    selected: COLORS.B500,
    info: COLORS.B400,
    success: COLORS.G400,
    warning: COLORS.Y400,
    error: COLORS.R400,
};
const Icon = React.forwardRef((props, ref) => {
    const { svg, rotate, style, type, color = 'default', size = '16' } = props, restProps = __rest(props, ["svg", "rotate", "style", "type", "color", "size"]);
    /**
     * span 에 기본 lineHeight 가 있으므로 오버라이드 해야함.
     * */
    const overrideStyle = {
        style: Object.assign({}, style),
    };
    const svgComponent = React.cloneElement(svg, {
        color: IconColor[color],
        size,
        style: overrideStyle.style,
    });
    const outerStyle = { lineHeight: 0 };
    if (Number.isSafeInteger(rotate))
        outerStyle.transform = `rotate(${rotate}deg)`;
    Object.assign(outerStyle, style);
    return (_jsx("span", Object.assign({ role: "img", ref: ref, "aria-label": type, style: outerStyle }, restProps, { children: svgComponent })));
});
const convertIcon = (Svg, iconType) => {
    /**
     * 일단 size default 로 아이콘 컴포넌트를 만든 다음, cloneElement 로 props 를 바꾼다.
     * */
    const InnerIcon = React.forwardRef((props, ref) => (_jsx(Icon, Object.assign({ svg: _jsx(Svg, {}), type: iconType, ref: ref }, props))));
    return InnerIcon;
};
export { convertIcon };
export default Icon;
