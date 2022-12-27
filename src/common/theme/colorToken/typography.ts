import { COLORS } from '../../../@foundations/Colors';

const typographyToken = {
  colorHeadline: COLORS.N900,
  colorHeading: COLORS.N800,
  colorParagraph: COLORS.N800,
  colorCodeMinimal: COLORS.N800,
  colorCodeDefault: COLORS.B600,
  colorTextSuccess: COLORS.G500,
  colorTextInfo: COLORS.B500,
  colorTextWarning: COLORS.Y500,
  colorTextError: COLORS.R500,
} as const;

export default {
  ...typographyToken,
};
