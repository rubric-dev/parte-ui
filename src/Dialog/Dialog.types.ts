import { ReactNode } from 'react';
import { TransitionStatus } from 'react-transition-group';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { Elevation } from '../@foundations/Elevation/elevation';
import { ButtonVariant } from '../Button/Button.types';
import { BoxProps } from '../Layout/Box.types';

type DialogSubCompProps = { close: () => void };
export type DialogSubComponent = ({ close }: DialogSubCompProps) => ReactNode;
type CloseHandler = (close: () => void) => void;

export interface DialogProps {
  close: () => void;
  onCancel?: CloseHandler;
  onConfirm?: CloseHandler;
  children?: ReactNode | DialogSubComponent;
  hasHeader?: boolean;
  header?: DialogSubComponent;
  hasClose?: boolean;
  title?: string;
  footer?: DialogSubComponent;
  hasFooter?: boolean;
  hasCancel?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmVariant?: ButtonVariant;
  isConfirmDisabled?: boolean;
  isConfirmLoading?: boolean;
  minHeightContent?: number;
  width?: number;
  elevation?: Elevation;
  state?: TransitionStatus;
  overrideStyles?: FlattenInterpolation<
    ThemedStyledProps<BoxProps, DefaultTheme>
  >;
}
