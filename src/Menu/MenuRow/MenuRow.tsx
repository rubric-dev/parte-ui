import { useState } from 'react';
import { MenuRowProps } from './MenuRow.types';
import * as Styled from './MenuRow.styled';
import { Checkbox } from '../../Checkbox';

export default function MenuRow(props: MenuRowProps) {
  const [hover, setHover] = useState(false);
  const { type = 'element', onSelect, leftSlot, children, selected } = props;

  return (
    <Styled.Container
      type={type}
      hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onSelect}
      {...props}
    >
      {type === 'element' && leftSlot && (
        <Styled.Icon selected={selected}>{leftSlot}</Styled.Icon>
      )}
      {type === 'checkbox' && (
        <Styled.CheckboxContainer>
          <Checkbox checked={selected} />
        </Styled.CheckboxContainer>
      )}
      {children}
    </Styled.Container>
  );
}
