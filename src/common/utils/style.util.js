import { css } from 'styled-components';
export const getWidthStyle = (width) => width === undefined
    ? ''
    : css `
        width: ${typeof width === 'number' ? `${width}px` : width};
      `;
export const getHeightStyle = (height) => height === undefined
    ? ''
    : css `
        height: ${typeof height === 'number' ? `${height}px` : height};
      `;
export const getFlexBasisStyle = (flexBasis) => flexBasis === undefined
    ? ''
    : css `
        flex-basis: ${typeof flexBasis === 'number'
        ? `${flexBasis}px`
        : flexBasis};
      `;
