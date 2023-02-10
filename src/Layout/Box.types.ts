import { HTMLAttributes, ReactNode } from 'react';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { Elevation } from '../@foundations/Elevation/elevation';
import { SPACING } from '../@foundations/Spacing';
import { Spacing } from '../@foundations/Spacing/spacing.types';

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
  height?: string | number;
  direction?: 'row' | 'column';
  /** Determines whether the Select is open. For use with controlled components.
   * @uxpinpropname Distribute
   * @uxpindescription Test
   * */
  justifyContent?:
    | 'Start'
    | 'Center'
    | 'End'
    | 'Space Between'
    | 'Space Around'
    | 'Space Evenly';
  /**
   * @uxpinpropname Align
   * */
  alignItems?: 'Start' | 'Center' | 'End';
  flexWrap?: boolean;
  flexBasis?: number;
  flex?: string;
  gap?: Spacing[keyof typeof SPACING];
  padding?: Spacing[keyof typeof SPACING];
  paddingTop?: Spacing[keyof typeof SPACING];
  paddingBottom?: Spacing[keyof typeof SPACING];
  paddingLeft?: Spacing[keyof typeof SPACING];
  paddingRight?: Spacing[keyof typeof SPACING];
  fullWidth?: boolean;
  elevation?: Elevation;
  /**
   * @uxpinignoreprop
   */
  overrideStyles?: FlattenInterpolation<
    ThemedStyledProps<BoxProps, DefaultTheme>
  >;
  /**
   * @uxpinignoreprop
   */
  children?: ReactNode;
};
