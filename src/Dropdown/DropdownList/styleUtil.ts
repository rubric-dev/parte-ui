import { CSSProperties } from 'styled-components';

const longerThanInnerHeight = (bottom: number, innerHeight: number) =>
  bottom > innerHeight;

/**
 * @param {any[]} arr
 */
export const getMenuStyle = (
  menuRect: DOMRect,
  triggerRect: DOMRect,
  option?: {
    offset?: number;
    usePortal?: boolean;
  }
): CSSProperties => {
  const menuStyle: CSSProperties = {};
  const offset = option?.offset ?? 8;
  const usePortal = option?.usePortal;

  const { bottom, left, right } = triggerRect;
  const { height, width } = menuRect;

  //-------------------

  const vertical = longerThanInnerHeight(
    bottom + height + offset,
    window.innerHeight
  )
    ? 'top'
    : 'bottom';
  // const horizontal = right + width > window.innerWidth ? 'right' : 'left';

  switch (vertical) {
    case 'top':
      menuStyle.bottom = usePortal
        ? window.innerHeight - (bottom - height - offset)
        : `${height + offset}px`;
      break;
    case 'bottom':
      menuStyle.top = usePortal ? bottom + offset : triggerRect.height + offset;
      break;
    default:
      break;
  }
  // switch (horizontal) {
  //   case 'left':
  //     if (usePortal) menuStyle.left = left;
  //     break;
  //   case 'right':
  //     if (usePortal) menuStyle.right = window.innerWidth - (left + width);
  //     break;
  //   default:
  //     break;
  // }

  return menuStyle;
};
