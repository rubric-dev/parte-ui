import { jsx as _jsx } from "react/jsx-runtime";
import ColorList from './ColorList';
export default {
    title: 'Foundation/Color',
    component: ColorList,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = () => {
    return _jsx(ColorList, {});
};
export const Default = Template.bind({});
