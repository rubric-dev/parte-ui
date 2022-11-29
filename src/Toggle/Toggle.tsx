import { useMemo } from 'react';
import * as Styled from './Toggle.styled';
import { ToggleProps } from './Toggle.types';
import { v4 as uuidv4 } from 'uuid';

const Toggle = (props: ToggleProps) => {
  const id = useMemo(() => uuidv4(), []);
  const { label, disabled = false, on, onChange } = props;

  return (
    <Styled.Container disabled={disabled}>
      <Styled.Input
        id={id}
        role="switch"
        type="checkbox"
        disabled={disabled}
        checked={on}
        onChange={() => onChange(!on)}
      />
      {label && <Styled.Label>{label}</Styled.Label>}
    </Styled.Container>
  );
};

export default Toggle;
