import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MenuRow } from '../MenuRow';
import * as Styled from './MenuGroup.styled';
export default function MenuGroup({ title, children }) {
    return (_jsxs(Styled.Group, Object.assign({ display: "flex", flexDirection: "column" }, { children: [title && _jsx(MenuRow, Object.assign({ type: "title" }, { children: title })), children] })));
}
