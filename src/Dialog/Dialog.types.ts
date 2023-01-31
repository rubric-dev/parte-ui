import { ReactNode } from 'react';
import { ButtonVariant } from '../Button/Button.types';

type DialogSubCompProps = { close: () => void };
export type DialogSubComponent = ({ close }: DialogSubCompProps) => ReactNode;
type CloseHandler = (close: () => void) => void;

export interface DialogProps {
  children?: ReactNode | DialogSubComponent;
  preventBodyScrolling?: boolean;
  shouldAutoFocus?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  // containerProps?: {};
  // contentContainerProps?: {};
  footer?: DialogSubComponent;
  hasCancel?: boolean;
  hasClose?: boolean;
  hasFooter?: boolean;
  hasHeader?: boolean;
  header?: DialogSubComponent;
  isConfirmDisabled?: boolean;
  isConfirmLoading?: boolean;
  isShown: boolean;
  minHeightContent?: number;
  onCancel?: CloseHandler;
  onCloseComplete?: () => void;
  onConfirm?: CloseHandler;
  onOpenComplete?: () => void;
  sideOffset?: string;
  title?: string;
  topOffset?: string;
  width?: number;
  confirmVariant?: ButtonVariant;
}
