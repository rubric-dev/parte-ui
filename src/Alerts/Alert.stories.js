var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import Alert from './Alert';
export default {
    title: 'Components/Alerts/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Alert, Object.assign({}, args));
};
export const Default = Template.bind({});
Default.args = {
    type: 'alert-inline',
    status: 'error',
    message: 'Warning message.',
};
export const BasicAlert = Template.bind({});
BasicAlert.args = {
    type: 'alert',
    status: 'error',
    title: 'Error Message',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
};
export const BasicAlertNoDescription = Template.bind({});
BasicAlertNoDescription.args = {
    type: 'alert',
    status: 'success',
    title: 'Success Message',
};
export const ToastAlert = Template.bind({});
ToastAlert.args = {
    type: 'toast',
    status: 'info',
    title: 'Info Message',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
};
