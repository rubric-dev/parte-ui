import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import * as Styled from './Pagination.styled';
import InterfaceChevronLeftIcon from '../icons/Icons/InterfaceChevronLeftIcon';
import InterfaceChevronRightIcon from '../icons/Icons/InterfaceChevronRightIcon';
import { Box } from '../Layout';
import { Heading } from '../@foundations/Typography';
import IconButton from '../IconButton';
const MAX_HANDLES_TO_SHOW = 7;
const ELLIPSIS_TEXT = '...';
const PaginationButton = ({ isSelected, onPageChange, disabled = false, page, children, }) => {
    const isEllipsis = typeof page === 'string' && page === ELLIPSIS_TEXT;
    const onClick = useCallback(() => {
        if (typeof page === 'number') {
            onPageChange(page);
        }
    }, [page, onPageChange]);
    if (isEllipsis) {
        return (_jsx(Styled.EllipsisText, Object.assign({ display: "flex", alignItems: "center", justifyContent: "center" }, { children: _jsx(Heading, Object.assign({ size: 300, color: "N700" }, { children: page })) })));
    }
    return (_jsx(Styled.PaginationButton, Object.assign({ disabled: disabled, isSelected: isSelected, "aria-current": isSelected, "aria-label": `Page ${page}`, onClick: onClick }, { children: children })));
};
const range = (start, stop) => {
    const output = [];
    for (let i = start; i <= stop; i++) {
        output.push(i);
    }
    return output;
};
const getPaginationButtonContent = ({ page, totalPages, }) => {
    if (totalPages <= MAX_HANDLES_TO_SHOW) {
        return range(1, totalPages);
    }
    if (totalPages > MAX_HANDLES_TO_SHOW && page <= 4) {
        return [...range(1, 5), ELLIPSIS_TEXT, totalPages];
    }
    if (totalPages - page < 4) {
        return [1, ELLIPSIS_TEXT, ...range(totalPages - 4, totalPages)];
    }
    return [
        1,
        ELLIPSIS_TEXT,
        ...range(page - 1, page + 1),
        ELLIPSIS_TEXT,
        totalPages,
    ];
};
const Pagination = ({ page, totalPages, onPageChange }) => {
    const prevDisabled = page === 1 || totalPages === 0;
    const nextDisabled = page === totalPages || totalPages === 0;
    return (_jsxs(Box, Object.assign({ display: "flex", alignItems: "center", padding: 0, gap: 4 }, { children: [_jsx(IconButton, { variant: "minimal", Icon: _jsx(InterfaceChevronLeftIcon, { size: 12, color: prevDisabled ? 'disabled' : 'muted' }), size: 32, disabled: prevDisabled, onClick: () => {
                    if (prevDisabled) {
                        return;
                    }
                    onPageChange(page - 1);
                } }), getPaginationButtonContent({ totalPages, page }).map((val, i) => {
                const isSelected = val === page;
                return (_jsx(PaginationButton, Object.assign({ isSelected: isSelected, page: val, onPageChange: onPageChange }, { children: val }), `${val}-${i}`));
            }), _jsx(IconButton, { variant: "minimal", Icon: _jsx(InterfaceChevronRightIcon, { size: 12, color: nextDisabled ? 'disabled' : 'muted' }), size: 32, disabled: nextDisabled, onClick: () => {
                    if (nextDisabled) {
                        return;
                    }
                    onPageChange(page + 1);
                } })] })));
};
export default Pagination;
