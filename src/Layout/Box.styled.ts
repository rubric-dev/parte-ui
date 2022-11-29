import { css } from 'styled-components';
import { BoxProps } from './Box.types';

const JUSTIFY_CONTENT = {
  Start: 'flex-start',
  Center: 'center',
  End: 'flex-end',
  'Space Between': 'space-between',
  'Space Around': 'space-around',
  'Space Evenly': 'space-evenly',
} as const;
const ALIGN_ITEMS = {
  Start: 'flex-start',
  Center: 'center',
  End: 'flex-end',
} as const;

export const commonBoxStyle = css<BoxProps>`
  ${({
    direction = 'row',
    justifyContent = 'Start',
    alignItems = 'Start',
    gap = 0,
    $wrap = false,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  }) =>
    css`
      display: flex;
      flex-direction: ${direction};
      justify-content: ${JUSTIFY_CONTENT[justifyContent]};
      align-items: ${ALIGN_ITEMS[alignItems]};
      gap: ${gap}px;
      flex-wrap: ${$wrap ? 'wrap' : 'nowrap'};
      ${[typeof padding === 'number' ? `padding: ${padding}px;` : '']}
      ${[
        typeof paddingLeft === 'number'
          ? `padding-left: ${paddingLeft}px;`
          : '',
      ]}
      ${[
        typeof paddingRight === 'number'
          ? `padding-right: ${paddingRight}px;`
          : '',
      ]}
      ${[
        typeof paddingTop === 'number'
          ? `padding-bottom: ${paddingTop}px;`
          : '',
      ]}
      ${[
        typeof paddingBottom === 'number'
          ? `padding-top: ${paddingBottom}px;`
          : '',
      ]}
    `}
`;
