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
  width?: string | number;
  height?: string | number;

  backgroundColor: string;
  color: string;

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

  margin?: Spacing[keyof typeof SPACING];
  marginTop?: Spacing[keyof typeof SPACING];
  marginBottom?: Spacing[keyof typeof SPACING];
  marginLeft?: Spacing[keyof typeof SPACING];
  marginRight?: Spacing[keyof typeof SPACING];

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
