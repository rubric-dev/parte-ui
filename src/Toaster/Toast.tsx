import { memo, useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Alert } from '../Alerts';
import { ToastState } from './ToastManager';
import * as Styled from './ToastManager.styled';
import { Transition } from 'react-transition-group';
import { Box } from '../Layout';

type ToastProps = {
  toast: ToastState;
  onRemove: () => void;
};
const duration = 5;
const ANIMATION_DURATION = 240;
const Toast = memo(function Toast({ toast, onRemove }: ToastProps) {
  const transitionRef = useRef(null);
  const [isShown, setIsShown] = useState(true);
  const [height, setHeight] = useState(0);
  const closeTimer = useRef<any>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const close = useCallback(() => {
    clearCloseTimer();
    setIsShown(false);
  }, [clearCloseTimer]);

  const startCloseTimer = useCallback(() => {
    if (duration) {
      clearCloseTimer();

      closeTimer.current = setTimeout(() => {
        close();
      }, duration * 1000);
    }
  }, [duration, clearCloseTimer, close]);

  useEffect(() => {
    startCloseTimer();

    return () => {
      clearCloseTimer();
    };
  }, [startCloseTimer, clearCloseTimer]);

  useEffect(() => {
    if (toast.isShown !== isShown && typeof toast.isShown === 'boolean') {
      setIsShown(toast.isShown);
    }
  }, [isShown, toast.isShown]);

  const handleMouseEnter = useCallback(
    () => clearCloseTimer(),
    [clearCloseTimer]
  );
  const handleMouseLeave = useCallback(
    () => startCloseTimer(),
    [startCloseTimer]
  );

  const onRef = useCallback((ref: any) => {
    if (ref === null) return;

    const { height: rectHeight } = ref.getBoundingClientRect();
    setHeight(rectHeight);
  }, []);

  return (
    <Transition
      nodeRef={transitionRef}
      appear
      unmountOnExit
      timeout={ANIMATION_DURATION}
      in={isShown}
      onExited={onRemove}
    >
      {(state) => {
        return (
          <Styled.ToastBox
            ref={transitionRef}
            data-state={state}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            marginBottom={isShown ? 0 : -height}
            height={height}
          >
            <Box ref={onRef} padding={8}>
              <Alert
                toastId={toast.id}
                type="toast"
                status={toast.status}
                title={toast.title}
                description={toast.description}
                onClose={close}
              />
            </Box>
          </Styled.ToastBox>
        );
      }}
    </Transition>
  );
});

export default Toast;
