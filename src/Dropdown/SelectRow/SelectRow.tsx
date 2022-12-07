import { SelectRowProps } from './SelectRow.types';
import * as Styled from './SelectRow.styled';
const SelectRow = ({
  variant = 'element',
  status,
  icon,
  label,
}: SelectRowProps) => {
  return <Styled.SelectRow variant={variant}>Label</Styled.SelectRow>;
};

export default SelectRow;

/** 구현 시 주의해야할점
1. 키보드 이벤트 (화살표 / 검색시) tabIndex
2. 타이틀도 옵션임 (groupedSelect)
3. search도 옵션임 (isSearchable)
4. TagInput이랑 연계해야함
*/
