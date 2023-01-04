import { COLORS } from '../../../@foundations/Colors';

const dropdownToken = {
  colorBackgroundDropdown: COLORS.N0,
  colorBackgroundDropdownHover: COLORS.N50,
  colorBackgroundDropdownSelected: COLORS.B100,
} as const;

export default {
  ...dropdownToken,
};
