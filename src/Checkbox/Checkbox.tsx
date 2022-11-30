import { useMemo, useState } from 'react';
import * as Styled from './Checkbox.styled';
import { CheckboxProps } from './Checkbox.types';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '../Layout';
import ActionSmallTickIcon from '../parte-icons/Icons/ActionSmallTickIcon';

const Checkbox = ({
  label,
  disabled = false,
  checked = false,
  indeterminate = false,
  onChange,
}: CheckboxProps) => {
  const id = useMemo(() => uuidv4(), []);

  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const renderIcon = () => {
    if (checked) {
      return <ActionSmallTickIcon size={16} />;
    }
    if (indeterminate) {
      return <Styled.Indeterminate />;
    }
    return <></>;
  };

  return (
    <Styled.Container
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <Styled.Checkbox
        hover={hover}
        pressed={pressed}
        checked={checked || indeterminate}
        disabled={disabled}
        alignItems="Center"
      >
        <Styled.Input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <Box alignItems="Center" justifyContent="Center" style={{ flex: 1 }}>
          {renderIcon()}
        </Box>
      </Styled.Checkbox>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
};

export default Checkbox;
