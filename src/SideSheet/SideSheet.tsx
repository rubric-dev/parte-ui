import { memo } from 'react';
import { Overlay } from '../Overlay';
import SheetClose from './SheetClose';
import { SideSheetProps } from './SideSheet.types';
import * as Styled from './SideSheet.styled';
import { css } from 'styled-components';

const SideSheet = memo(function SideSheet(props: SideSheetProps) {
  const {
    width = 620,
    isShown,
    children,
    onOpenComplete,
    onCloseComplete,
    beforeClose,
    shouldAutoFocus = true,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEscapePress = true,
    // position = Position.RIGHT,
    preventBodyScrolling = false,
  } = props;

  return (
    <Overlay
      isShown={isShown}
      shouldAutoFocus={shouldAutoFocus}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEscapePress}
      beforeClose={beforeClose}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Styled.Container
          data-state={state}
          overrideStyles={css`
            width: ${width}px;
          `}
        >
          <SheetClose data-state={state} onClick={close} />
          <Styled.Content
            data-state={state}
            direction="column"
            overrideStyles={css`
              width: ${width}px;
            `}
          >
            {typeof children === 'function' ? children({ close }) : children}
          </Styled.Content>
        </Styled.Container>
      )}
    </Overlay>
  );
});
export default SideSheet;
