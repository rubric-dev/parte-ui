import { COLORS } from '../../../@foundations/Colors';

const LinkToken = {
  colorTextLink: COLORS.B400,
  colorTextLinkHover: COLORS.B500,
  colorTextLinkPressed: COLORS.B600,
  colorTextLinkFocused: COLORS.B500,
  colorTextLinkDisabled: COLORS.N500,
  colorTextLinkVisited: COLORS.V400,
} as const;

export default {
  ...LinkToken,
};
