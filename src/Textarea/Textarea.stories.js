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
import Textarea from './Textarea';
export default {
    title: 'Components/Forms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Textarea, Object.assign({}, args, { placeholder: "Placeholder" }));
};
export const Default = Template.bind({});
Default.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
export const Error = Template.bind({});
Error.args = {
    errorText: 'error!!',
};
export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Label',
};
export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
    label: 'Label',
    required: true,
};
export const WithDescription = Template.bind({});
WithDescription.args = {
    label: 'Label',
    description: 'Description',
};
