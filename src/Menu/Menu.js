import { jsx as _jsx } from "react/jsx-runtime";
import { MenuDivider } from './MenuDivider';
import { MenuGroup } from './MenuGroup';
import { MenuRow } from './MenuRow';
import { MenuOptionsGroup } from './MenuOptionsGroup';
import * as Styled from './Menu.styled';
const Menu = ({ children }) => {
    return _jsx(Styled.Menu, { children: children });
};
Menu.Row = MenuRow;
Menu.Divider = MenuDivider;
Menu.Group = MenuGroup;
Menu.OptionsGroup = MenuOptionsGroup;
export default Menu;
