import { ReactNode } from 'react';
import { TransitionStatus } from 'react-transition-group';
import { OverlayClose } from '../Overlay/Overlay.types';

type SideSheetSubCompProps = { close: OverlayClose };
export type SideSheetSubComponent = ({
  close,
}: SideSheetSubCompProps) => ReactNode;

export type SideSheetProps = {
  width?: number;
  isShown: boolean;
  children?: ReactNode | SideSheetSubComponent;
  onOpenComplete?: (isAppearing: boolean) => void;
  onCloseComplete?: () => void;
  beforeClose?: () => boolean | void;
  shouldAutoFocus?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscapePress?: boolean;
  preventBodyScrolling?: boolean;
};

export type SideCloseProps = {
  onClick: () => void;
  state: TransitionStatus;
};
