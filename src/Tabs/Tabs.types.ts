import { SPACING } from '../@foundations/Spacing';
import { Spacing } from '../@foundations/Spacing/spacing.types';
import { BoxProps } from '../Layout/Box.types';

export type TabsProps = BoxProps & {
  margin?: Spacing[keyof typeof SPACING];
  marginTop?: Spacing[keyof typeof SPACING];
  marginBottom?: Spacing[keyof typeof SPACING];
  marginLeft?: Spacing[keyof typeof SPACING];
  marginRight?: Spacing[keyof typeof SPACING];
};
