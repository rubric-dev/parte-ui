import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './SelectRow.styled';
import { forwardRef, useEffect, useRef } from 'react';
import ActionSearchIcon from '../../icons/Icons/ActionSearchIcon';
const SearchRow = forwardRef((props, ref) => {
    var _a;
    const { inputValue, onChange } = props;
    return (_jsxs(Styled.SelectRow, Object.assign({ variant: "search", ref: ref, role: "selectItemSearch", disabled: props.disabled }, { children: [_jsx(ActionSearchIcon, { size: 12, color: "muted" }), _jsx(Styled.SearchInput, { variant: "search", role: "selectItemSearchInput", placeholder: (_a = props.placeholder) !== null && _a !== void 0 ? _a : 'Search', value: inputValue, autoFocus: true, onChange: onChange })] })));
});
const TitleRow = forwardRef((props, ref) => {
    return (_jsxs(Styled.SelectRow, Object.assign({ variant: "title", ref: ref, role: "selectItemTitle" }, { children: [props.icon, props.children] })));
});
const ElementRow = forwardRef(({ selected, shouldFocusWhenSelected = true, disabled, onClick, onKeyDown, icon, children, }, ref) => {
    const rowRef = useRef(null);
    useEffect(() => {
        if (rowRef.current && ref !== null) {
            if (typeof ref === 'function') {
                ref(rowRef.current);
                return;
            }
            ref.current = rowRef.current;
        }
    }, []);
    useEffect(() => {
        if (selected && rowRef.current && shouldFocusWhenSelected)
            rowRef.current.focus();
    }, [selected, shouldFocusWhenSelected]);
    return (_jsxs(Styled.SelectRow, Object.assign({ variant: "element", tabIndex: disabled ? -1 : 0, ref: rowRef, role: "selectItem", disabled: disabled, selected: selected, onClick: onClick, onKeyDown: onKeyDown }, { children: [icon, children] })));
});
const SelectRow = forwardRef((props, ref) => {
    if (props.variant === 'search') {
        return _jsx(SearchRow, Object.assign({ ref: ref }, props));
    }
    if (props.variant === 'title') {
        return _jsx(TitleRow, Object.assign({ ref: ref }, props));
    }
    return _jsx(ElementRow, Object.assign({ ref: ref }, props));
});
export default SelectRow;
