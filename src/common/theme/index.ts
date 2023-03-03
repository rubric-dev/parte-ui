import { COLORS } from '../../@foundations/Colors';
import { SPACING } from '../../@foundations/Spacing';
import { TYPOGRAPHY } from '../../@foundations/Typography';
import { ELEVATION } from '../../@foundations/Elevation';
import { commonStyles } from '../commonStyles';
import { colorTokens } from './colorToken';

const theme = {
  colors: COLORS,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  elevation: ELEVATION,
  commonStyles,
  ...colorTokens,
};
export default theme;
