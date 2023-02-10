import { css } from 'styled-components';
import { getElevation } from '../common/utils/elevation.util';
import { getHeightStyle, getWidthStyle } from '../common/utils/style.util';
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
    width,
    height,
    direction = 'row',
    justifyContent = 'Start',
    alignItems = 'Start',
    gap = 0,
    flexWrap = false,
    flexBasis,
    flex,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    fullWidth,
    elevation,
  }) =>
    css`
      width: ${fullWidth ? `100%` : `inherit`};
      ${getWidthStyle(width)}
      ${getHeightStyle(height)}
      display: flex;
      flex-direction: ${direction};
      justify-content: ${JUSTIFY_CONTENT[justifyContent]};
      align-items: ${ALIGN_ITEMS[alignItems]};
      gap: ${gap}px;
      flex-basis: ${flexBasis ? `${flexBasis}px` : 'unset'};
      flex: ${flex};
      flex-wrap: ${flexWrap ? 'wrap' : 'nowrap'};

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
      ${[typeof paddingTop === 'number' ? `padding-top: ${paddingTop}px;` : '']}
      ${[
        typeof paddingBottom === 'number'
          ? `padding-bottom: ${paddingBottom}px;`
          : '',
      ]}
      ${typeof elevation === 'number' && getElevation(elevation)}
    `}
`;
