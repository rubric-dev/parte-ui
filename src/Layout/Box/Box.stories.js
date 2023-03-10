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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../../Button';
import Box from './Box';
export default {
    title: 'Components/Layout/Box',
    component: Box,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Content = (_jsxs(_Fragment, { children: [_jsx(Button, Object.assign({ variant: "primary" }, { children: "First Button" })), _jsx(Button, Object.assign({ variant: "primary" }, { children: "Second Button" })), _jsx(Button, Object.assign({ variant: "primary" }, { children: "Third Button" })), _jsx(Button, Object.assign({ variant: "primary" }, { children: "Fourth Button" }))] }));
const Template = (_a) => {
    var { flexDirection } = _a, args = __rest(_a, ["flexDirection"]);
    return _jsx(Box, Object.assign({}, args, { flexDirection: flexDirection }));
};
export const FlexBox = Template.bind({});
FlexBox.args = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    children: Content,
    marginTop: 32,
    backgroundColor: 'purple',
    width: 600,
    justifyContent: 'space-between',
};
export const GridBox = Template.bind({});
GridBox.args = {
    display: 'grid',
    gap: 10,
    backgroundColor: 'green',
    gridTemplateColumns: 'repeat(2, 1fr)',
    children: Content,
};
