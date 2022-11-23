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
    wrap = false,
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
      gap: ${`${gap}px`};
      wrap: ${wrap ? 'wrap' : 'nowrap'};
      ${[padding ? `padding: ${padding}px;` : '']}
      ${[paddingLeft ? `padding-left: ${paddingLeft}px;` : '']}
      ${[paddingRight ? `padding-right: ${paddingRight}px;` : '']}
      ${[paddingTop ? `padding-bottom: ${paddingTop}px;` : '']}
      ${[paddingBottom ? `padding-top: ${paddingBottom}px;` : '']}
    `}
`;
