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
import { Paragraph } from '../@foundations/Typography';
import { Box } from '../Layout';
import Link from './Link';
export default {
    title: 'Components/Buttons/Link',
    component: Link,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return (_jsx(Box, { children: _jsx(Link, Object.assign({}, args, { children: children })) }));
};
const LinkInParagraphTemplate = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return (_jsx(Box, { children: _jsx(Paragraph, Object.assign({ size: 200 }, { children: _jsxs(_Fragment, { children: [`Hello! It's a `, _jsx(Link, Object.assign({}, args, { children: children })), " ", `Component`] }) })) }));
};
export const Default = Template.bind({});
Default.args = {
    children: 'Link',
    href: 'https://google.com',
    target: '_blank',
};
export const LinkInParagraph = LinkInParagraphTemplate.bind({});
LinkInParagraph.args = {
    children: 'Link',
    href: 'https://google.com',
    target: '_blank',
};
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled Link',
    href: 'https://google.com',
    disabled: true,
    target: '_blank',
};
