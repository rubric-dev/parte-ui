import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Tab from '../Tab/Tab';
const SidebarTab = forwardRef((props, ref) => {
    return (_jsx(Tab, Object.assign({ ref: ref }, props, { variant: "Secondary", direction: "vertical" })));
});
export default SidebarTab;
