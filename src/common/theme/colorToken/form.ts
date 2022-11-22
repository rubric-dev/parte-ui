import { COLORS } from '../../../@foundations/Colors';

const formToken = {
  colorTextPlaceholderDefault: COLORS.N600,
  colorTextPlaceholderHover: COLORS.N700,
  colorTextPlaceholderFocused: COLORS.N700,
  colorTextPlaceholderDisabled: COLORS.N600,
  colorTextDefault: COLORS.N800,
  colorTextDisabled: COLORS.N600,
} as const;

export default {
  ...formToken,
};
