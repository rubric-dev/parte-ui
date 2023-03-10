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
import SideSheet from './SideSheet';
import styled, { css } from 'styled-components';
import { Box } from '../Layout';
import { Tab, Tabs } from '../Tabs';
export default {
    title: 'Components/Overlays/SideSheet',
    component: SideSheet,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    const [open, setOpen] = useState(false);
    return (_jsxs("div", Object.assign({ style: { display: 'flex', flexDirection: 'column', overflowY: 'auto' } }, { children: [_jsx(Button, Object.assign({ variant: "primary", onClick: () => setOpen(true) }, { children: "Open SideSheet" })), _jsx("div", { style: { width: '100%', height: '1000px' } }), _jsx(SideSheet, Object.assign({}, args, { isShown: open, onCloseComplete: () => setOpen(false) }))] })));
};
export const Default = Template.bind({});
Default.args = {
    preventBodyScrolling: false,
    shouldCloseOnEscapePress: true,
    shouldCloseOnOverlayClick: true,
};
const Containter = styled(Box) ``;
const Header = styled(Box) `
  ${({ theme }) => css `
    ${theme.typography.P200}
    color: ${theme.colors.N700};
    border-bottom: 1px solid ${theme.colors.N200};
  `}
`;
const Title = styled.h4 `
  ${({ theme }) => css `
    ${theme.typography.H600}
    color: ${theme.colors.N900};
  `}
`;
const TabList = styled(Box) `
  ${({ theme }) => css `
    border-bottom: 1px solid ${theme.colors.N200};
  `}
`;
const Body = styled(Box) `
  ${({ theme }) => css `
    background: rgb(250, 251, 255);
    border-bottom: 1px solid ${theme.colors.N200};
    height: 100%;
  `}
`;
const Card = styled(Box) `
  ${({ theme }) => css `
    background: ${theme.colors.N0};
    border-bottom: 1px solid ${theme.colors.N200};
    height: 240px;
    box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px;
    border-radius: 4px;

    ${theme.typography.H600}
  `}
`;
const Featured = (_a) => {
    var args = __rest(_a, []);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (_jsxs("div", Object.assign({ style: { display: 'flex', flexDirection: 'column', overflowY: 'auto' } }, { children: [_jsx(Button, Object.assign({ variant: "primary", onClick: () => setOpen(true) }, { children: "Open SideSheet" })), _jsx("div", { style: { width: '100%', height: '1000px' } }), _jsxs(SideSheet, Object.assign({}, args, { isShown: open, onCloseComplete: () => setOpen(false) }, { children: [_jsxs(Containter, Object.assign({ flexDirection: "column", width: "100%" }, { children: [_jsxs(Header, Object.assign({ padding: 32, paddingTop: 24, paddingBottom: 24, flexDirection: "column", width: "100%" }, { children: [_jsx(Title, { children: "Title" }), "Optional description or sub title"] })), _jsx(TabList, Object.assign({ padding: 8, paddingLeft: 32, paddingRight: 32, width: "100%" }, { children: _jsx(Tabs, { children: ['Traits', 'Event History', 'Identities'].map((tab, index) => (_jsx(Tab, Object.assign({ variant: "Secondary", selected: selectedIndex === index, onClick: () => setSelectedIndex(index) }, { children: tab }), tab))) }) }))] })), _jsx(Body, Object.assign({ width: "100%", padding: 16, paddingTop: 24, paddingLeft: 32, paddingRight: 32 }, { children: _jsx(Card, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center" }, { children: "Some content" })) }))] }))] })));
};
export const FullFeatured = Featured.bind({});
FullFeatured.args = {
    preventBodyScrolling: false,
    shouldCloseOnEscapePress: true,
    shouldCloseOnOverlayClick: true,
};
