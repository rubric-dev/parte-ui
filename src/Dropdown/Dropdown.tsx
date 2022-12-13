import React, {
  Children,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from 'react';
import * as Styled from './Dropdown.styled';
import { DropdownProps, GroupOption } from './Dropdown.types';
import DropdownContext from './DropdownContext';

import { useDropdown } from './useDropdown';

const Dropdown = ({ isGroupSelect, children }: DropdownProps<string>) => {
  const context = useContext(DropdownContext);
  // const { dropdownRef } = useDropdown();

  return (
    <DropdownContext.Provider value={{ isGroupSelect }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default Dropdown;
