import { COLORS } from '../../../@foundations/Colors';

const generalToken = {
  colorBackgroundDefault: COLORS.N0,
  colorBackgroundHover: COLORS.N0,
  // colorBackgroundDefault: 속성이 없음,
  colorBackgroundFocused: COLORS.N50,
  colorBackgroundDisabled: COLORS.N100,
  colorBorderDefault: COLORS.N400,
  colorBorderHover: COLORS.N400,
  // colorBorderDefault: 속성이 없음,
  colorBorderFocused: COLORS.B300,
  colorBorderDisabled: COLORS.N300,
} as const;

export default {
  ...generalToken,
};
