import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import { CSSProperties } from 'styled-components';
import useOutsideClick from '../hooks/useOutsideClick';
import * as Styled from './Dropdown.styled';
import { DropdownContextState } from './Dropdown.types';
import DropdownContext from './DropdownContext';
import {
  getDropdownPosition,
  getDropdownStyle,
} from './DropdownList/styleUtil';

const Dropdown = ({ children, ...rest }: DropdownContextState<string>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClick = useCallback(() => {
    setIsOpen((props) => !props);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  useOutsideClick([dropdownRef], () => onClose());

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <DropdownContext.Provider
      value={{ ...rest, dropdownRef, isOpen, onClick, onClose }}
    >
      <Styled.Container ref={dropdownRef} onKeyDown={onKeyDown}>
        {children}
      </Styled.Container>
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { onClick } = useContext(DropdownContext);
  return <Styled.Trigger onClick={onClick}>{children}</Styled.Trigger>;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { usePortal, isOpen, dropdownRef, offset } =
    useContext(DropdownContext);
  const menuRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<DropdownPosition | null>(null);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>();

  const calculateDropdownPosition = () => {
    const menuRect = menuRef.current?.getBoundingClientRect();
    const dropdownRect = dropdownRef?.current?.getBoundingClientRect();
    if (menuRect && dropdownRect) {
      const { innerWidth, innerHeight } = window;
      const pos = getDropdownPosition(
        menuRect,
        dropdownRect,
        innerWidth,
        innerHeight,
        offset
      );
      return pos;
    }
    return null;
  };
  const calculateMenuStyle = (pos: DropdownPosition) => {
    const dropdownRect = dropdownRef?.current?.getBoundingClientRect();
    if (dropdownRect) {
      const { innerWidth, innerHeight } = window;
      const style = getDropdownStyle(
        pos,
        dropdownRect,
        innerWidth,
        innerHeight,
        { usePortal, offset }
      );
      return style;
    }
    return undefined;
  };

  useEffect(() => {
    if (isOpen) {
      setPosition(calculateDropdownPosition());
    } else {
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
    if (!position) return;
    setMenuStyle(calculateMenuStyle(position));
  }, [position]);

  if (!isOpen) {
    return null;
  }

  const rootDom = document.getElementById('root');
  if (usePortal && rootDom) {
    return createPortal(
      <Styled.Menu
        ref={menuRef}
        hidden={!menuStyle}
        style={menuStyle}
        usePortal
      >
        {children}
      </Styled.Menu>,
      rootDom
    );
  }
  return (
    <Styled.Menu
      ref={menuRef}
      hidden={!menuStyle}
      direction="column"
      style={menuStyle}
    >
      {children}
    </Styled.Menu>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;

export default Dropdown;
