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
import { useContext, useEffect, useRef, useState, useCallback, } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../hooks/useOutsideClick';
import * as Styled from './Dropdown.styled';
import DropdownContext from './DropdownContext';
import { getDropdownPosition, getDropdownStyle, } from './DropdownList/styleUtil';
const Dropdown = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const onClick = useCallback(() => {
        setIsOpen((props) => !props);
    }, []);
    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);
    useOutsideClick([dropdownRef, menuRef], onClose);
    const onKeyDown = (e) => {
        if (e.key === 'Escape')
            onClose();
    };
    return (_jsx(DropdownContext.Provider, Object.assign({ value: Object.assign(Object.assign({}, rest), { dropdownRef, isOpen, onClick, onClose, menuRef }) }, { children: _jsx(Styled.Container, Object.assign({ ref: dropdownRef, onKeyDown: onKeyDown }, { children: children })) })));
};
const Trigger = ({ children }) => {
    const { onClick } = useContext(DropdownContext);
    return _jsx(Styled.Trigger, Object.assign({ onClick: onClick }, { children: children }));
};
const Menu = ({ children }) => {
    const { usePortal, isOpen, dropdownRef, offset, onClose, menuRef } = useContext(DropdownContext);
    const [position, setPosition] = useState(null);
    const [menuStyle, setMenuStyle] = useState();
    const calculateDropdownPosition = () => {
        var _a, _b;
        const menuRect = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const dropdownRect = (_b = dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        if (menuRect && dropdownRect) {
            const { innerWidth, innerHeight } = window;
            const pos = getDropdownPosition(menuRect, dropdownRect, innerWidth, innerHeight, offset);
            return pos;
        }
        return null;
    };
    const calculateMenuStyle = (pos) => {
        var _a, _b;
        const dropdownRect = (_a = dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const menuRect = (_b = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        if (dropdownRect && menuRect) {
            const { innerHeight } = window;
            const style = getDropdownStyle(pos, dropdownRect, menuRect, innerHeight, {
                usePortal,
                offset,
            });
            return style;
        }
        return undefined;
    };
    useEffect(() => {
        if (isOpen) {
            setPosition(calculateDropdownPosition());
        }
        else {
            setPosition(null);
            setMenuStyle(undefined);
        }
    }, [isOpen]);
    useEffect(() => {
        const handleScrollAndResize = () => {
            const pos = calculateDropdownPosition();
            setPosition(pos);
            if (usePortal && pos) {
                const style = calculateMenuStyle(pos);
                setMenuStyle(style);
            }
        };
        window.addEventListener('scroll', handleScrollAndResize);
        window.addEventListener('resize', handleScrollAndResize);
        return () => {
            window.removeEventListener('scroll', handleScrollAndResize);
            window.removeEventListener('resize', handleScrollAndResize);
        };
    }, [usePortal]);
    useEffect(() => {
        if (!position)
            return;
        setMenuStyle(calculateMenuStyle(position));
    }, [position]);
    if (!isOpen) {
        return null;
    }
    const rootDom = document.getElementById('root');
    if (usePortal && rootDom) {
        return createPortal(_jsx(Styled.Menu, Object.assign({ ref: menuRef, hidden: !menuStyle, style: menuStyle, usePortal: true }, { children: typeof children === 'function' ? children({ onClose }) : children })), rootDom);
    }
    return (_jsx(Styled.Menu, Object.assign({ ref: menuRef, hidden: !menuStyle, display: "flex", flexDirection: "column", style: menuStyle }, { children: typeof children === 'function' ? children({ onClose }) : children })));
};
Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
export default Dropdown;
