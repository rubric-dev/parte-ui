import { css } from 'styled-components';
import { getElevation } from '../common/utils/elevation.util';
import { getWidthStyle } from '../common/utils/style.util';
import { BoxProps } from './Box.types';

export const commonBoxStyle = css<BoxProps>`
  ${({
    display = 'block',
    width,
    height,
    // ====================
    backgroundColor,
    color,
    // ====================
    flexDirection = 'row',
    justifyContent = 'start',
    alignItems = 'start',
    alignContent = 'start',
    flexWrap = 'nowrap',
    gap = 0,
    rowGap = 0,
    columnGap = 0,
    // ====================
    order = 0,
    flexGrow = 0,
    flexShrink = 1,
    flexBasis = 'auto',
    flex = '0 1 auto',
    alignSelf = 'auto',
    // ====================
    gridTemplateColumns = 'none',
    gridTemplateRows = 'none',

    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,

    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    elevation,
  }) =>
    css`
      display: ${display};
      ${getWidthStyle(width)};
      ${getWidthStyle(height)};

      background-color: ${backgroundColor};
      color: ${color};

      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      align-content: ${alignContent};
      flex-wrap: ${flexWrap};
      row-gap: ${rowGap}px;
      column-gap: ${columnGap}px;
      gap: ${gap}px;

      order: ${typeof order === 'number' ? `${order}px` : order};
      flex-grow: ${flexGrow};
      flex-shrink: ${flexShrink};
      flex-basis: ${typeof flexBasis === 'number'
        ? `${flexBasis}px`
        : flexBasis};
      flex: ${flex};
      align-self: ${alignSelf};

      grid-template-columns: ${gridTemplateColumns};
      grid-template-rows: ${gridTemplateRows};

      ${[typeof padding === 'number' ? ` ${padding}px;` : '']};
      ${[
        typeof paddingLeft === 'number'
          ? `padding-left: ${paddingLeft}px;`
          : '',
      ]};
      ${[
        typeof paddingRight === 'number'
          ? `padding-right: ${paddingRight}px;`
          : '',
      ]};
      ${[
        typeof paddingTop === 'number' ? `padding-top: ${paddingTop}px;` : '',
      ]};
      ${[
        typeof paddingBottom === 'number'
          ? `padding-bottom: ${paddingBottom}px;`
          : '',
      ]};
      ${[typeof margin === 'number' ? ` ${margin}px;` : '']};
      ${[
        typeof marginLeft === 'number' ? `margin-left: ${marginLeft}px;` : '',
      ]};
      ${[
        typeof marginRight === 'number'
          ? `margin-right: ${marginRight}px;`
          : '',
      ]};
      ${[typeof marginTop === 'number' ? `margin-top: ${marginTop}px;` : '']};
      ${[
        typeof marginBottom === 'number'
          ? `margin-bottom: ${marginBottom}px;`
          : '',
      ]};

      ${typeof elevation === 'number' && getElevation(elevation)};
    `}
`;
