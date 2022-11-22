import { COLORS } from '../../../@foundations/Colors';

const typographyToken = {
  colorHeadline: COLORS.N900,
  colorHeading: COLORS.N800,
  colorParagraph: COLORS.N800,
  colorCodeMinimal: COLORS.N800,
  colorCodeDefault: COLORS.B600,
} as const;

export default {
  ...typographyToken,
};
