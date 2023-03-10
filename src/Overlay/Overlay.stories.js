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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '../Button';
import Overlay from './Overlay';
export default {
    title: 'Components/Overlays/Overlay',
    component: Overlay,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    const [open, setOpen] = useState(false);
    return (_jsxs("div", Object.assign({ style: { display: 'flex', flexDirection: 'column', overflowY: 'auto' } }, { children: [_jsx(Button, Object.assign({ variant: "primary", onClick: () => setOpen(true) }, { children: "Open Overlay" })), _jsx("div", { style: { width: '100%', height: '1000px' } }), _jsx(Overlay, Object.assign({}, args, { isShown: open, onExited: () => setOpen(false) }))] })));
};
export const Default = Template.bind({});
Default.args = {};
export const AllowScroll = Template.bind({});
AllowScroll.args = {
    preventBodyScrolling: false,
};
