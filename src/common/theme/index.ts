import { COLORS } from '../../@foundations/Colors';
import { SPACING } from '../../@foundations/Spacing';
import { commonStyles } from '../commonStyles';
import { tokens } from './colorToken';

const theme = {
  colors: COLORS,
  spacing: SPACING,
  commonStyles,
  ...tokens,
};
export default theme;
