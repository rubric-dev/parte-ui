import { memo, useState, useEffect, useRef, MouseEventHandler } from 'react';
import preventBodyScroll from '../common/utils/scroll.util';
import { Portal } from '../Portal';
import { OverlayProps } from './Overlay.types';
import * as Styled from './Overlay.styled';

const Overlay = memo(
  ({
    children,
    preventBodyScrolling = true,
    shouldAutoFocus = true,
    shouldCloseOnClick = true,
    shouldCloseOnEsc = true,
    beforeClose,
    open: openProps = true,
  }: OverlayProps) => {
    const [previousActiveElement, setPreviousActiveElement] =
      useState<HTMLElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(!!openProps);

    useEffect(() => {
      setOpen(openProps);
    }, [openProps]);

    const close = () => {
      beforeClose?.();
      setOpen(false);
    };

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && shouldCloseOnEsc) close();
    };

    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInsideOverlay = () => {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(() => {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE

        if (
          !shouldAutoFocus ||
          containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
          document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
          !openProps
        ) {
          return;
        }

        const isFocusOutsideModal = !containerRef.current.contains(
          document.activeElement
        );
        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          const autofocusElement =
            containerRef.current.querySelector('[autofocus]');
          const wrapperElement =
            containerRef.current.querySelector('[tabindex]');
          const buttonElement = containerRef.current.querySelector('button');

          if (autofocusElement) {
            (autofocusElement as HTMLElement).focus();
          } else if (wrapperElement) {
            (wrapperElement as HTMLElement).focus();
          } else if (buttonElement) {
            buttonElement.focus();
          }
        }
      });
    };

    const bringFocusBackToTarget = () => {
      return requestAnimationFrame(() => {
        if (
          previousActiveElement == null || // eslint-disable-line eqeqeq, no-eq-null
          containerRef.current == null || // eslint-disable-line eqeqeq, no-eq-null
          document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
          return;
        }

        // Bring back focus on the target.
        const isFocusInsideModal = containerRef.current.contains(
          document.activeElement
        );
        if (document.activeElement === document.body || isFocusInsideModal) {
          previousActiveElement.focus();
        }
      });
    };

    useEffect(() => {
      setPreviousActiveElement(document.activeElement as HTMLElement);
      bringFocusInsideOverlay();
      if (preventBodyScrolling) {
        preventBodyScroll(true);
      }

      document.body.addEventListener('keydown', onEsc, false);
      return () => {
        document.body.removeEventListener('keydown', onEsc, false);
        bringFocusBackToTarget();
        if (preventBodyScrolling) {
          preventBodyScroll(false);
        }
      };
    }, []);

    const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (e) => {
      if (e.target !== e.currentTarget || !shouldCloseOnClick) return;
      close();
    };

    if (!open) return null;

    return (
      <Portal>
        <Styled.BackDrop ref={containerRef} onClick={handleBackdropClick}>
          {children}
        </Styled.BackDrop>
      </Portal>
    );
  }
);

export default Overlay;
