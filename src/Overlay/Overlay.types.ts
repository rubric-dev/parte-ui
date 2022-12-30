import { EnterHandler, ExitHandler } from 'react-transition-group/Transition';

export interface OverlayProps {
  children?: React.ReactElement;
  beforeClose?: () => boolean | void;
  preventBodyScrolling?: boolean;
  shouldAutoFocus?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnClick?: boolean;
  isShown?: boolean;
  onExit?: ExitHandler<HTMLDivElement>;
  onExiting?: ExitHandler<HTMLDivElement>;
  onExited?: ExitHandler<HTMLDivElement>;
  onEnter?: EnterHandler<HTMLDivElement>;
  onEntering?: EnterHandler<HTMLDivElement>;
  onEntered?: EnterHandler<HTMLDivElement>;
}
