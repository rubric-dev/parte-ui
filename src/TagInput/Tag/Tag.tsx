import * as Styled from './Tag.styled';
import { TagProps } from './Tag.types';
import ActionSmallCrossIcon from '../../parte-icons/Icons/ActionSmallCrossIcon';

function Tag({ tag, onRemove }: TagProps) {
  return (
    <Styled.Container status={tag.status} tabIndex={0}>
      <Styled.Label status={tag.status}>{tag.label}</Styled.Label>
      <ActionSmallCrossIcon
        color="danger"
        size={12}
        onClick={() => onRemove(tag.value)}
      />
    </Styled.Container>
  );
}

export default Tag;
