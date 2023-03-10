import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './Tag.styled';
import ActionSmallCrossIcon from '../../icons/Icons/ActionSmallCrossIcon';
function Tag({ tag, onRemove }) {
    return (_jsxs(Styled.Container, Object.assign({ status: tag.status, tabIndex: 0, gap: 2, paddingRight: 4, paddingLeft: 4, display: "flex", alignItems: "center" }, { children: [_jsx(Styled.Label, Object.assign({ status: tag.status }, { children: tag.label })), _jsx(ActionSmallCrossIcon, { color: "error", size: 12, onClick: () => onRemove(tag.value) })] })));
}
export default Tag;
