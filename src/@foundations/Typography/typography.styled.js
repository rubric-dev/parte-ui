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
import styled, { css } from 'styled-components';
const CommonTextStyle = ({ marginBottom, marginLeft, marginRight, marginTop, }) => css `
  margin-top: ${marginTop ? `${marginTop}px` : 'unset'};
  margin-bottom: ${marginBottom ? `${marginBottom}px` : 'unset'};
  margin-left: ${marginLeft ? `${marginLeft}px` : 'unset'};
  margin-right: ${marginRight ? `${marginRight}px` : 'unset'};
`;
export const Heading = styled.h2 `
  ${(_a) => {
    var { theme, size, color = 'N900' } = _a, marginProps = __rest(_a, ["theme", "size", "color"]);
    return css `
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 900 && theme.typography.H900}
    ${size === 800 && theme.typography.H800}
    ${size === 700 && theme.typography.H700}
    ${size === 600 && theme.typography.H600}
    ${size === 500 && theme.typography.H500}
    ${size === 400 && theme.typography.H400}
    ${size === 300 && theme.typography.H300}
    ${size === 200 && theme.typography.H200}
    ${size === 100 && theme.typography.H100}
  `;
}}
`;
export const Paragraph = styled.p `
  ${(_a) => {
    var { theme, size, color = 'N900' } = _a, marginProps = __rest(_a, ["theme", "size", "color"]);
    return css `
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 300 && theme.typography.P300}
    ${size === 200 && theme.typography.P200}
    ${size === 100 && theme.typography.P100}
  `;
}}
`;
export const Caption = styled.span `
  ${(_a) => {
    var { theme, size, color = 'N900' } = _a, marginProps = __rest(_a, ["theme", "size", "color"]);
    return css `
    ${CommonTextStyle(marginProps)}
    color: ${theme.colors[color]};
    ${size === 200 && theme.typography.C200}
    ${size === 100 && theme.typography.C100}
  `;
}}
`;
export const Code = styled.code `
  ${(_a) => {
    var { theme, variant = 'default' } = _a, marginProps = __rest(_a, ["theme", "variant"]);
    return css `
    ${CommonTextStyle(marginProps)}
    ${variant === 'default' && theme.typography.CD200}
    ${variant === 'minimal' && theme.typography.CM200}
  `;
}}
`;
