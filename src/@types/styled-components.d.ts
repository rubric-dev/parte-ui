import 'styled-components';
import { Colors } from '../@foundations/Colors/colors.types';
import { Elevation } from '../@foundations/Elevation/elevation.types';
import { Spacing } from '../@foundations/Spacing/spacing.types';
import { Typography } from '../@foundations/Typography/typography.types';
import { CommonStyles } from '../common/commonStyles';
import { ColorTokenType } from '../common/theme/colorToken';

declare module 'styled-components' {
  interface DefaultTheme extends ColorTokenType {
    colors: Colors;
    spacing: Spacing;
    typography: Typography;
    elevation: Elevation;
    commonStyles: CommonStyles;
  }
}
