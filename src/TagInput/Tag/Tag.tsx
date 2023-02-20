import * as Styled from './Tag.styled';
import { TagProps } from './Tag.types';
import ActionSmallCrossIcon from '../../parte-icons/Icons/ActionSmallCrossIcon';

function Tag({ tag, onRemove }: TagProps) {
  return (
    <Styled.Container
      status={tag.status}
      tabIndex={0}
      gap={2}
      paddingRight={4}
      paddingLeft={4}
      display="flex"
      alignItems="center"
    >
      <Styled.Label status={tag.status}>{tag.label}</Styled.Label>
      <ActionSmallCrossIcon
        color="error"
        size={12}
        onClick={(e) => {
          e.stopPropagation();
          onRemove(tag.value);
        }}
      />
    </Styled.Container>
  );
}

export default Tag;
