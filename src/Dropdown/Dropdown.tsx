import React, {
  Children,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import { CSSProperties } from 'styled-components';
import { Box } from '../Layout';
import * as Styled from './Dropdown.styled';
import { DropdownContextState, GroupOption } from './Dropdown.types';
import DropdownContext from './DropdownContext';
import { getMenuStyle } from './DropdownList/styleUtil';

import { useDropdown } from './useDropdown';

const Dropdown = ({ children, ...rest }: DropdownContextState<string>) => {
  const context = useContext(DropdownContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const { dropdownRef } = useDropdown();

  const onClick = useCallback(() => {
    setIsOpen((props) => !props);
  }, []);

  return (
    <DropdownContext.Provider value={{ ...rest, dropdownRef, isOpen, onClick }}>
      <Styled.Container ref={dropdownRef}>{children}</Styled.Container>
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { onClick } = useContext(DropdownContext);
  return <Styled.Trigger onClick={onClick}>{children}</Styled.Trigger>;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const { usePortal, isOpen, dropdownRef } = useContext(DropdownContext);
  const menuRef = useRef<HTMLDivElement>(null);

  // 메뉴가 열렸을때 그려져야할 위치 결정 로직
  // 아웃사이드 클릭
  // ESC
  // 키보드 네비게이션
  // 포커스
  // 메뉴 구성요소 판별

  const [menuStyle, setMenuStyle] = useState<CSSProperties>();

  useEffect(() => {
    if (!isOpen) return;
    const menuRect = menuRef.current?.getBoundingClientRect();
    const dropdownRect = dropdownRef?.current?.getBoundingClientRect();
    console.log(dropdownRect);
    if (menuRect && dropdownRect)
      setMenuStyle(getMenuStyle(menuRect, dropdownRect, { usePortal }));
  }, [isOpen]);

  useEffect(() => {
    const onScroll = (e: Event) => {};
    window.addEventListener('scroll', (e) => {});
    window.addEventListener('resize', onScroll);
  }, []);

  if (!isOpen) {
    return null;
  }

  const rootDom = document.getElementById('root');
  if (usePortal && rootDom) {
    // absolute
    return createPortal(
      <Styled.Menu ref={menuRef} hidden={!menuStyle}>
        {children}
      </Styled.Menu>,
      rootDom
    );
  }
  // absolute
  return (
    <Styled.Menu
      hidden={!menuStyle}
      direction="column"
      ref={menuRef}
      style={menuStyle}
    >
      {children}
    </Styled.Menu>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;

export default Dropdown;
