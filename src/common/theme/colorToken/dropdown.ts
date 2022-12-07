import { COLORS } from '../../../@foundations/Colors';

const dropdownToken = {
  colorBackgroundDropdown: COLORS.N0,
  colorBackgroundDropdownHover: COLORS.N50,
  colorBackgroundDropdownSelect: COLORS.B400,
} as const;

export default {
  ...dropdownToken,
};
