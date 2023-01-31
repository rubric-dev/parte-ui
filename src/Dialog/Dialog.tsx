import { memo } from 'react';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Overlay } from '../Overlay';
import ActionCrossIcon from '../parte-icons/Icons/ActionCrossIcon';
import { DialogProps, DialogSubComponent } from './Dialog.types';
import * as Styled from './Dialog.styled';
import { css } from 'styled-components';

const Dialog = memo(function Dialog({
  children,
  cancelLabel = '취소',
  confirmLabel = '확인',
  // containerProps = emptyProps,
  // contentContainerProps,
  footer,
  hasCancel = true,
  hasClose = true,
  hasFooter = true,
  hasHeader = true,
  header,
  isConfirmDisabled = false,
  isConfirmLoading = false,
  isShown = false,
  minHeightContent = 80,
  onCancel,
  onCloseComplete,
  onConfirm,
  onOpenComplete,
  // overlayProps = emptyProps,
  preventBodyScrolling = false,
  shouldAutoFocus = true,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  sideOffset = '16px',
  title,
  topOffset = '12vmin',
  width = 560,
  confirmVariant = 'primary',
}: DialogProps) {
  const sideOffsetWithUnit = Number.isInteger(sideOffset)
    ? `${sideOffset}px`
    : sideOffset;
  const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`;

  const topOffsetWithUnit = Number.isInteger(topOffset)
    ? `${topOffset}px`
    : topOffset;
  const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`;

  const handleCancel = (close: () => void) => () =>
    onCancel ? onCancel(close) : close();
  const handleConfirm = (close: () => void) => () =>
    onConfirm ? onConfirm(close) : close();

  const renderChildren = (close: () => void) => {
    if (typeof children === 'function') {
      return children({ close });
    }

    if (typeof children === 'string') {
      return <span>{children}</span>;
    }

    return children;
  };

  const renderNode = (node: DialogSubComponent, close: () => void) => {
    if (typeof node === 'function') {
      return node({ close });
    }

    return node;
  };

  const renderHeader = (close: () => void) => {
    if (!header && !hasHeader) {
      return undefined;
    }

    return (
      <Styled.Header
        justifyContent="Space Between"
        alignItems="Center"
        padding={32}
        paddingBottom={24}
      >
        {header ? (
          renderNode(header, close)
        ) : (
          <>
            <Styled.Title>{title}</Styled.Title>
            {hasClose && (
              <IconButton
                variant="minimal"
                size={32}
                Icon={<ActionCrossIcon />}
                onClick={handleCancel(close)}
              />
            )}
          </>
        )}
      </Styled.Header>
    );
  };

  const renderFooter = (close: () => void) => {
    if (!footer && !hasFooter) {
      return undefined;
    }

    return (
      <Styled.Footer>
        {footer ? (
          renderNode(footer, close)
        ) : (
          <>
            {/* Cancel should be first to make sure focus gets on it first. */}
            {hasCancel && (
              <Button
                variant="secondary"
                tabIndex={0}
                onClick={handleCancel(close)}
              >
                {cancelLabel}
              </Button>
            )}

            <Button
              tabIndex={0}
              variant={confirmVariant}
              // isLoading={isConfirmLoading}
              disabled={isConfirmDisabled}
              onClick={handleConfirm(close)}
            >
              {confirmLabel}
            </Button>
          </>
        )}
      </Styled.Footer>
    );
  };

  return (
    <Overlay
      isShown={isShown}
      shouldAutoFocus={shouldAutoFocus}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Styled.DialogContainer
          role="dialog"
          direction="column"
          data-state={state}
          overrideStyles={css`
            width: ${width}px;
            max-width: ${maxWidth};
            max-height: ${maxHeight};
            margin: ${topOffsetWithUnit} ${sideOffsetWithUnit};
          `}
        >
          {renderHeader(close)}

          <Styled.Content
            data-state={state}
            overrideStyles={css`
              min-height: ${minHeightContent}px;
            `}
          >
            {renderChildren(close)}
          </Styled.Content>

          {renderFooter(close)}
        </Styled.DialogContainer>
      )}
    </Overlay>
  );
});
export default Dialog;
