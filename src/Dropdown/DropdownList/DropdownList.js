import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './DropdownList.styled';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import shallowEqual from 'shallowequal';
import DropdownContext from '../DropdownContext';
import { ARROW_VERTICAL_KEYS } from '../../constant';
import SelectRow from '../SelectRow';
const isGroupOptions = (options) => {
    if (options.length === 0) {
        return false;
    }
    if ('groupName' in options[0]) {
        return true;
    }
    return false;
};
const compareValue = (value1, value2) => {
    if (typeof value1 === 'object' && typeof value2 === 'object') {
        if (value1 === null)
            return value1 === value2;
        return shallowEqual(value1, value2);
    }
    return value1 === value2;
};
const DropdownList = ({ options, value, onSelect, onChange, isSearchable, noOptionsText, isMulti, closeOnSelect, }) => {
    const [inputValue, setInputValue] = useState('');
    const menuRef = useRef(null);
    const menuItems = useRef([]);
    const { onClose } = useContext(DropdownContext);
    const onSelectValue = (option) => {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
        if (isMulti) {
            if (!value) {
                onChange === null || onChange === void 0 ? void 0 : onChange([option]);
            }
            else if (!('length' in value)) {
                // eslint-disable-next-line no-console
                console.warn('value props should be array type if you use isMulti option.');
            }
            else {
                const newValue = value.find(({ value: selectedValue }) => compareValue(selectedValue, option.value))
                    ? value.filter(({ value: selectedValue }) => !compareValue(selectedValue, option.value))
                    : [...value, option];
                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
            }
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(option);
        }
        const isCloseOnSelect = closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : !isMulti;
        if (isCloseOnSelect)
            onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    const handleKeyboard = (option) => (e) => {
        if (e.key === 'Enter') {
            onSelectValue(option);
        }
    };
    const isSelected = (targetOpt, selectedOpt) => {
        if (!selectedOpt)
            return false;
        if ('length' in selectedOpt) {
            return selectedOpt.some(({ value }) => compareValue(targetOpt.value, value));
        }
        return compareValue(targetOpt.value, selectedOpt.value);
    };
    const filteredOptions = useMemo(() => {
        if (isGroupOptions(options)) {
            return options.map((groupOption) => (Object.assign(Object.assign({}, groupOption), { options: groupOption.options.filter(({ label }) => label.includes(inputValue)) })));
        }
        return options.filter(({ label }) => label.includes(inputValue));
    }, [inputValue, options]);
    useEffect(() => {
        const root = document.getElementById('root');
        const currentMenuRef = menuRef.current;
        if (!currentMenuRef || !root)
            return;
        const onKeyDown = (e) => {
            var _a, _b;
            if (ARROW_VERTICAL_KEYS.includes(e.key))
                e.preventDefault();
            if (e.isComposing)
                return;
            menuItems.current = [
                ...currentMenuRef.querySelectorAll('[role="selectItem"]:not([disabled])'),
            ];
            const target = e.target;
            if (target === currentMenuRef) {
                (_a = menuItems.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
                return;
            }
            const indexOfItem = menuItems.current.indexOf(target);
            const { length } = menuItems.current;
            let nextIndex = indexOfItem;
            switch (e.key) {
                case 'ArrowDown':
                    nextIndex = indexOfItem + 1 >= length ? 0 : indexOfItem + 1;
                    break;
                case 'ArrowUp':
                    nextIndex = indexOfItem - 1 < 0 ? length - 1 : indexOfItem - 1;
                    break;
                default:
                    break;
            }
            (_b = menuItems.current[nextIndex]) === null || _b === void 0 ? void 0 : _b.focus();
        };
        root.addEventListener('keydown', onKeyDown);
        return () => {
            root.removeEventListener('keydown', onKeyDown);
        };
    }, [filteredOptions]);
    const noOption = useMemo(() => {
        if (filteredOptions.length === 0)
            return true;
        if (isGroupOptions(filteredOptions)) {
            return filteredOptions.every(({ options }) => options.length === 0);
        }
        return false;
    }, [filteredOptions]);
    return (_jsxs(Styled.List, Object.assign({ ref: menuRef, display: "flex", flexDirection: "column" }, { children: [isSearchable && (_jsx(SelectRow, { variant: "search", inputValue: inputValue, onChange: (e) => {
                    setInputValue(e.target.value);
                } })), noOption && (_jsx(Styled.NoOption, Object.assign({ display: "flex", justifyContent: "center", alignItems: "center" }, { children: noOptionsText !== null && noOptionsText !== void 0 ? noOptionsText : 'No Options found' }))), isGroupOptions(filteredOptions)
                ? filteredOptions.map(({ groupName, options: groupOptions }, index) => (_jsxs(React.Fragment, { children: [!!groupOptions.length && (_jsx(SelectRow, Object.assign({ variant: "title" }, { children: groupName }))), groupOptions
                            .filter(({ label }) => label.includes(inputValue))
                            .map((groupOption) => (_jsx(SelectRow, Object.assign({ onClick: () => onSelectValue(groupOption), selected: isSelected(groupOption, value), disabled: groupOption.disabled, onKeyDown: handleKeyboard(groupOption), icon: groupOption.icon, shouldFocusWhenSelected: !isMulti }, { children: groupOption.label }), groupOption.label)))] }, index)))
                : filteredOptions
                    .filter(({ label }) => label.includes(inputValue))
                    .map((option, index) => (_jsx(SelectRow, Object.assign({ onClick: () => onSelectValue(option), selected: isSelected(option, value), disabled: option.disabled, onKeyDown: handleKeyboard(option), icon: option.icon, shouldFocusWhenSelected: !isMulti }, { children: option.label }), index)))] })));
};
export default DropdownList;
