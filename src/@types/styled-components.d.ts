import 'styled-components';
import { Colors } from '../@foundations/Colors/colors.types';
import { Spacing } from '../@foundations/Spacing/spacing.types';
import { CommonStyles } from '../common/commonStyles';
import { TokenType } from '../common/theme/colorToken';

declare module 'styled-components' {
  interface DefaultTheme extends TokenType {
    colors: Colors;
    spacing: Spacing;
    commonStyles: CommonStyles;
  }
}
