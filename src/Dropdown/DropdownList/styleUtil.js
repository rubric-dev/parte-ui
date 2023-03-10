export const getDropdownPosition = (menuRect, parentRect, innerWidth, innerHeight, offset = 8) => {
    const { bottom: parentBottom, left: parentLeft } = parentRect;
    const { width: menuWidth, height: menuHeight } = menuRect;
    const vertical = parentBottom + menuHeight + offset > innerHeight ? 'TOP' : 'BOTTOM';
    const horizontal = parentLeft + menuWidth > innerWidth ? 'RIGHT' : 'LEFT';
    return `${vertical}_${horizontal}`;
};
export const getDropdownStyle = (position, parentRect, menuRect, innerHeight, option) => {
    var _a;
    const offset = (_a = option === null || option === void 0 ? void 0 : option.offset) !== null && _a !== void 0 ? _a : 8;
    const usePortal = option === null || option === void 0 ? void 0 : option.usePortal;
    const style = {};
    const [vertical, horizontal] = position.split('_');
    const { width: parentWidth, height: parentHeight, bottom: parnetBottom, left: parentLeft, } = parentRect;
    const { width } = menuRect;
    switch (vertical) {
        case 'TOP':
            style.bottom = usePortal
                ? innerHeight - (parnetBottom - parentHeight - offset)
                : `${parentHeight + offset}px`;
            break;
        case 'BOTTOM':
            style.top = usePortal ? parnetBottom + offset : parentHeight + offset;
            break;
        default:
            break;
    }
    switch (horizontal) {
        case 'LEFT':
            style.left = usePortal ? parentLeft : 0;
            break;
        case 'RIGHT':
            if (usePortal) {
                style.left = parentLeft - width + parentWidth;
            }
            else {
                style.right = 0;
            }
            break;
        default:
            break;
    }
    return style;
};
