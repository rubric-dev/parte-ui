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
import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import { cloneDeep } from 'lodash';
import defaultTheme from './theme/index';
export default function ThemeProvider({ children, theme = {} }) {
    const customizedTheme = overrideTheme(theme);
    return (_jsx(DefaultThemeProvider, Object.assign({ theme: customizedTheme }, { children: children })));
}
const overrideTheme = (theme) => {
    let plate = cloneDeep(defaultTheme);
    const { colors: customColors = {} } = theme, customTokens = __rest(theme, ["colors"]);
    const { colors: defaultColors, commonStyles, elevation, spacing, typography, colorModalBackground } = plate, tokens = __rest(plate, ["colors", "commonStyles", "elevation", "spacing", "typography", "colorModalBackground"]);
    // colors를 먼저 변경해준다.
    if (customColors) {
        plate.colors = Object.assign(Object.assign({}, defaultColors), customColors);
    }
    // token에 theme색상을 채워준다.
    for (const token in tokens) {
        const tokenKey = token;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        plate[tokenKey] = plate.colors[tokens[tokenKey]];
    }
    // theme에서 customTokens들의 색상만 override한다.
    if (customTokens) {
        plate = Object.assign(Object.assign({}, plate), customTokens);
    }
    return plate;
};
