import 'styled-components';
import { Colors } from '../@foundations/Colors/colors.types';
import { Elevation } from '../@foundations/Elevation/elevation.types';
import { Spacing } from '../@foundations/Spacing/spacing.types';
import { Typography } from '../@foundations/Typography/typography.types';
import { CommonStyles } from '../common/commonStyles';
import { TokenType } from '../common/theme/colorToken';

declare module 'styled-components' {
  interface DefaultTheme extends TokenType {
    colors: Colors;
    spacing: Spacing;
    typography: Typography;
    elevation: Elevation;
    commonStyles: CommonStyles;
  }
}
