import { HTMLAttributes, ReactNode } from 'react';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { SPACING } from '../@foundations/Spacing';
import { Spacing } from '../@foundations/Spacing/spacing.types';

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
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
  $wrap?: boolean;
  gap?: Spacing[keyof typeof SPACING];
  padding?: Spacing[keyof typeof SPACING];
  paddingTop?: Spacing[keyof typeof SPACING];
  paddingBottom?: Spacing[keyof typeof SPACING];
  paddingLeft?: Spacing[keyof typeof SPACING];
  paddingRight?: Spacing[keyof typeof SPACING];
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
