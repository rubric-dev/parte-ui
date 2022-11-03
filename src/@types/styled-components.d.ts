import 'styled-components';

import { Palette } from '../@foundations/Palette/palette.types';
import { Spacing } from '../@foundations/Spacing/Spacing.types';
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    spacing: Spacing;
  }
}
