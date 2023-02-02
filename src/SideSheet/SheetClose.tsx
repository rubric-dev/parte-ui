import { memo } from 'react';
import { css } from 'styled-components';
import * as Styled from './SideSheet.styled';
import ActionCrossIcon from '../parte-icons/Icons/ActionCrossIcon';
import { SideCloseProps } from './SideSheet.types';

const SheetClose = memo(({ onClick }: SideCloseProps) => {
  return (
    <Styled.Close
      alignItems="Center"
      justifyContent="Center"
      overrideStyles={css`
        width: 32px;
        height: 32px;
      `}
      onClick={onClick}
    >
      <ActionCrossIcon />
    </Styled.Close>
  );
});

export default SheetClose;
