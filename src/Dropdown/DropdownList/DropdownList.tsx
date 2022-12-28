import { DropdownListProps } from './DropdownList.types';
import * as Styled from './DropdownList.styled';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SelectRow } from '../SelectRow';
import shallowEqual from 'shallowequal';
import DropdownContext from '../DropdownContext';

const isGroupOptions = <T extends unknown>(
  options: Option<T>[] | GroupOption<T>[]
): options is GroupOption<T>[] => {
  if (options.length === 0) {
    return false;
  }
  if ('groupName' in options[0]) {
    return true;
  }
  return false;
};
// const isGroupOption = <T extends unknown>(
//   options: Option<T> | GroupOption<T>
// ): options is GroupOption<T> => {
//   if ('groupName' in options) {
//     return true;
//   }
//   return false;
// };

const DropdownList = <T extends unknown>({
  options,
  selectValue,
  onSelect,
  isSearchable,
}: DropdownListProps<T>) => {
  const [inputValue, setInputValue] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItems = useRef<HTMLDivElement[]>([]);

  const { onClose } = useContext(DropdownContext);

  useEffect(() => {
    const root = document.getElementById('root');
    const currentMenuRef = menuRef.current;
    if (!currentMenuRef || !root) return;

    menuItems.current = [
      ...currentMenuRef.querySelectorAll('[role="selectItem"]:not([disabled])'),
    ] as HTMLDivElement[];

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).role !== 'selectItemSearchInput') {
        e.preventDefault();
      }
      const target = e.target as HTMLDivElement;
      if (target === currentMenuRef) {
        menuItems.current[0]?.focus();
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
      menuItems.current[nextIndex]?.focus();
    };
    root.addEventListener('keydown', onKeyDown);
    return () => {
      root.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const isSelected = (objA: Option<T>, objB?: Option<T>) => {
    if (!objB) return false;
    if (typeof objA.value === 'object') {
      if (objA.value === null) return false;
      return shallowEqual(objA.value, objB.value);
    }
    return objA.value === objB.value;
  };

  return (
    <Styled.List ref={menuRef}>
      {isSearchable && (
        <SelectRow
          variant="search"
          inputValue={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      )}
      {isGroupOptions(options)
        ? options.map(({ groupName, options: groupOptions }, index) => (
            <React.Fragment key={index}>
              <SelectRow variant="title" label={groupName} />
              {groupOptions.map((groupOption) => (
                <SelectRow
                  key={groupOption.label}
                  label={groupOption.label}
                  onClick={() => {
                    onSelect?.(groupOption);
                    onClose?.();
                  }}
                  selected={isSelected(groupOption, selectValue)}
                />
              ))}
            </React.Fragment>
          ))
        : options.map(({ label, value }, index) => (
            <SelectRow
              key={index}
              label={label}
              onClick={() => onSelect?.({ label, value })}
            />
          ))}
    </Styled.List>
  );
};

export default DropdownList;
