import { css } from 'styled-components';
import { COLORS } from '../@foundations/Colors';
export const commonStyles = {
    outline: css `
    outline: 2px solid ${COLORS.B200};
  `,
    outlineError: css `
    outline: 2px solid ${COLORS.R100};
  `,
};
