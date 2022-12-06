import { COLORS } from '../../@foundations/Colors';
import { SPACING } from '../../@foundations/Spacing';
import { TYPOGRAPHY } from '../../@foundations/Typography';
import { commonStyles } from '../commonStyles';
import { tokens } from './colorToken';

const theme = {
  colors: COLORS,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  commonStyles,
  ...tokens,
};
export default theme;
