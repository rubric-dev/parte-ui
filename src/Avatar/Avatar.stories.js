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
import Avatar from './Avatar';
export default {
    title: 'Components/Avatars & Badges/Avatars',
    component: Avatar,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Avatar, Object.assign({}, args));
};
export const Default = Template.bind({});
Default.args = {
    avatarColor: 'BLUE',
    name: 'solmin Seo',
    src: 'https://avatars.githubusercontent.com/u/40189520?v=4',
    showInitial: true,
};
