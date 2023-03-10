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
import Tooltip from './Tooltip';
import { Position } from '../Positioner';
import * as Styled from './Tooltip.styled';
import Button from '../Button/Button';
export default {
    title: 'Components/Overlays/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return (_jsx("div", Object.assign({ style: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: '50px',
            minHeight: '50vh',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto',
        } }, { children: _jsx(Tooltip, Object.assign({}, args, { children: children })) })));
};
export const Default = Template.bind({});
Default.args = {
    position: Position.BOTTOM_RIGHT,
    content: 'Segment syncs a list of users to these destinations and keeps it up to date.',
    children: _jsx(Button, Object.assign({ variant: "primary" }, { children: "Click Me" })),
    hideDelay: 100,
    showDelay: 100,
};
const TooltipTemplate = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return _jsx(Styled.Content, { children: "\uD234\uD301\uC758 \uB0B4\uC6A9" });
};
export const TooltipContent = TooltipTemplate.bind({});
