import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ActionTickIcon from '../../icons/Icons/ActionTickIcon';
import { MenuRow } from '../MenuRow';
import * as Styled from './MenuOptionsGroup.styled';
export default function MenuOptionsGroup({ title, options, selected, onChange, }) {
    return (_jsxs(Styled.Group, Object.assign({ display: "flex", flexDirection: "column" }, { children: [title && _jsx(MenuRow, Object.assign({ type: "title" }, { children: title })), options.map(({ label, value }) => {
                const isSelected = value === selected;
                return (_jsx(MenuRow, Object.assign({ leadingIcon: isSelected ? _jsx(ActionTickIcon, { size: 16 }) : _jsx(Styled.EmptyIcon, {}), type: "element", selected: isSelected, onSelect: () => onChange(value) }, { children: label }), label));
            })] })));
}
