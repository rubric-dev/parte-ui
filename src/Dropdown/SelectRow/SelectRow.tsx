import { SelectRowProps } from './SelectRow.types';
import * as Styled from './SelectRow.styled';
import { forwardRef } from 'react';
import ActionSearchIcon from '../../parte-icons/Icons/ActionSearchIcon';

const SelectRow = forwardRef<HTMLDivElement, SelectRowProps>((props, ref) => {
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

  return (
    <Styled.SelectRow
      variant="element"
      tabIndex={props.disabled ? -1 : 0}
      ref={ref}
      role="selectItem"
      disabled={props.disabled}
      selected={props.selected}
    >
      {props.label}
    </Styled.SelectRow>
  );
});

export default SelectRow;

/** 구현 시 주의해야할점
1. 키보드 이벤트 (화살표 / 검색시) tabIndex
2. 타이틀도 옵션임 (groupedSelect)
3. search도 옵션임 (isSearchable)
4. TagInput이랑 연계해야함
*/
