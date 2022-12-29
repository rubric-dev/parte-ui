import { DropdownListProps } from './DropdownList.types';
import * as Styled from './DropdownList.styled';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { SelectRow } from '../SelectRow';
import shallowEqual from 'shallowequal';
import DropdownContext from '../DropdownContext';
import { ARROW_KEYS } from '../../constant';

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

  const onSelectValue = (option: Option<T>) => {
    onSelect?.(option);
    onClose?.();
  };

  const handleKeyboard =
    (option: Option<T>) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        onSelectValue(option);
      }
    };
  const isSelected = (objA: Option<T>, objB?: Option<T>) => {
    if (!objB) return false;
    if (typeof objA.value === 'object') {
      if (objA.value === null) return false;
      return shallowEqual(objA.value, objB.value);
    }
    return objA.value === objB.value;
  };

  const filteredOptions = useMemo(() => {
    if (isGroupOptions(options)) {
      return options.map((groupOption) => ({
        ...groupOption,
        options: groupOption.options.filter(({ label }) =>
          label.includes(inputValue)
        ),
      }));
    }
    return options.filter(({ label }) => label.includes(inputValue));
  }, [inputValue, options]);

  useEffect(() => {
    const root = document.getElementById('root');
    const currentMenuRef = menuRef.current;
    if (!currentMenuRef || !root) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (ARROW_KEYS.includes(e.key)) e.preventDefault();
      if (e.isComposing) return;

      menuItems.current = [
        ...currentMenuRef.querySelectorAll(
          '[role="selectItem"]:not([disabled])'
        ),
      ] as HTMLDivElement[];

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
  }, [filteredOptions]);

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
      {isGroupOptions(filteredOptions)
        ? filteredOptions.map(({ groupName, options: groupOptions }, index) => (
            <React.Fragment key={index}>
              <SelectRow variant="title" label={groupName} />
              {groupOptions
                .filter(({ label }) => label.includes(inputValue))
                .map((groupOption) => (
                  <SelectRow
                    key={groupOption.label}
                    label={groupOption.label}
                    onClick={() => onSelectValue(groupOption)}
                    selected={isSelected(groupOption, selectValue)}
                    disabled={groupOption.disabled}
                    onKeyDown={handleKeyboard(groupOption)}
                  />
                ))}
            </React.Fragment>
          ))
        : filteredOptions
            .filter(({ label }) => label.includes(inputValue))
            .map((option, index) => (
              <SelectRow
                key={index}
                label={option.label}
                onClick={() => onSelectValue(option)}
                selected={isSelected(option, selectValue)}
                disabled={option.disabled}
                onKeyDown={handleKeyboard(option)}
              />
            ))}
    </Styled.List>
  );
};

export default DropdownList;
