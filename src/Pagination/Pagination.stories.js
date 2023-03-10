import { jsx as _jsx } from "react/jsx-runtime";
import Pagination from './Pagination';
import { useCallback, useState } from 'react';
export default {
    title: 'Components/Controls/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = ({ page: initialPage, totalPages, }) => {
    const [page, setPage] = useState(initialPage);
    const onPageChange = useCallback((index) => {
        setPage(index);
    }, []);
    return (_jsx(Pagination, { page: page, totalPages: totalPages, onPageChange: onPageChange }));
};
export const Default = Template.bind({});
Default.args = {
    page: 4,
    totalPages: 10,
};
export const Under7Page = Template.bind({});
Under7Page.args = {
    page: 3,
    totalPages: 6,
};
