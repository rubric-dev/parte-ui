import { ReactNode } from 'react';

type SideSheetSubCompProps = { close: () => void };
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
  // position: ;
  preventBodyScrolling?: boolean;
};

export type SideCloseProps = {
  onClick: () => void;
};
