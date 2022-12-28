import { SelectRowProps } from './SelectRow.types';
import * as Styled from './SelectRow.styled';
import { forwardRef, useEffect, useRef } from 'react';
import ActionSearchIcon from '../../parte-icons/Icons/ActionSearchIcon';

const SelectRow = forwardRef<HTMLDivElement, SelectRowProps>((props, ref) => {
  const rowRef = useRef<HTMLDivElement>(null);
  if (props.variant === 'search') {
    const { inputValue, onChange } = props;
    return (
      <Styled.SelectRow
        variant="search"
        ref={ref}
        role="selectItemSearch"
        disabled={props.disabled}
      >
        <ActionSearchIcon size={12} color="muted" />
        <Styled.SearchInput
          variant="search"
          role="selectItemSearchInput"
          placeholder={props.placeholder ?? 'Search'}
          value={inputValue}
          autoFocus
          onChange={onChange}
        />
      </Styled.SelectRow>
    );
  }
  if (props.variant === 'title') {
    return (
      <Styled.SelectRow variant="title" ref={ref} role="selectItemTitle">
        {props.icon}
        {props.label}
      </Styled.SelectRow>
    );
  }

  useEffect(() => {
    if (props.selected && rowRef.current) rowRef.current.focus();
  }, [props.selected]);

  return (
    <Styled.SelectRow
      variant="element"
      tabIndex={props.disabled ? -1 : 0}
      ref={rowRef}
      role="selectItem"
      disabled={props.disabled}
      selected={props.selected}
      onClick={props.onClick}
    >
      {props.label}
    </Styled.SelectRow>
  );
});

export default SelectRow;
