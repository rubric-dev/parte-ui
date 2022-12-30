export interface OverlayProps {
  children?: React.ReactElement;
  beforeClose?: () => void;
  preventBodyScrolling?: boolean;
  shouldAutoFocus?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnClick?: boolean;
  open?: boolean;
}
