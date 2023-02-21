import { HTMLAttributes, ReactNode } from 'react';
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { Elevation } from '../@foundations/Elevation/elevation';
import { SPACING } from '../@foundations/Spacing';
import { Spacing } from '../@foundations/Spacing/spacing.types';
import {
  Display,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent,
  FlexWrap,
  AlignSelf,
} from '../constant';

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  display?: Display;

  // flex parent properties
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  flexWrap?: FlexWrap;
  gap?: Spacing[keyof typeof SPACING];
  rowGap?: Spacing[keyof typeof SPACING];
  columnGap?: Spacing[keyof typeof SPACING];

  // flex child properties
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  flex?: string;
  alignSelf?: AlignSelf;

  // grid parent properties
  gridTemplateColumns?: string;
  gridTemplateRows?: string;

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
