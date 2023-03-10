import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import ActionCrossIcon from '../icons/Icons/ActionCrossIcon';
import * as Styled from './SideSheet.styled';
const SheetClose = memo(({ onClick, state }) => {
    return (_jsx(Styled.Close, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center", "data-state": state, onClick: onClick }, { children: _jsx(ActionCrossIcon, {}) })));
});
export default SheetClose;
