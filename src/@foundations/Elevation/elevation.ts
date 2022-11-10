import { css } from 'styled-components';

const elevation = {
  elevation0: css``,
  elevation1: css`
    box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    border-radius: 8px;
  `,
  elevation2: css`
    box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.16);
    border-radius: 4px;
  `,
  elevation3: css`
    box-shadow: 0px 12px 40px rgba(16, 24, 64, 0.24);
    border-radius: 8px;
  `,
} as const;

export default elevation;
