import { SelectRowProps } from './SelectRow.types';
import * as Styled from './SelectRow.styled';
import { forwardRef } from 'react';
import ActionSearchIcon from '../../parte-icons/Icons/ActionSearchIcon';

const SelectRow = forwardRef<HTMLDivElement, SelectRowProps>(
  (
    {
      variant = 'element',
      icon,
      label,
      tabIndex = 0,
      placeholder,
    }: SelectRowProps,
    ref
  ) => {
    const tab = variant === 'element' ? tabIndex : -1;
    if (variant === 'search') {
      return (
        <Styled.SelectRow variant={variant} ref={ref}>
          <ActionSearchIcon size={12} color="muted" />
          <Styled.SearchInput placeholder={placeholder} />
        </Styled.SelectRow>
      );
    }
    return (
      <Styled.SelectRow variant={variant} tabIndex={tab} ref={ref}>
        {label}
      </Styled.SelectRow>
    );
  }
);

export default SelectRow;

/** 구현 시 주의해야할점
1. 키보드 이벤트 (화살표 / 검색시) tabIndex
2. 타이틀도 옵션임 (groupedSelect)
3. search도 옵션임 (isSearchable)
4. TagInput이랑 연계해야함
*/
