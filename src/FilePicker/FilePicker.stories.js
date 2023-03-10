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
import FilePicker from './FilePicker';
export default {
    title: 'Components/Forms/FilePicker',
    component: FilePicker,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(FilePicker, Object.assign({}, args));
};
export const Default = Template.bind({});
Default.args = {
    name: 'default-file-picker',
};
export const WithLabel = Template.bind({});
WithLabel.args = {
    name: 'label-file-picker',
    label: 'Label',
    description: 'This is Description',
};
export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
    name: 'multi-file-picker',
    multiple: true,
};
export const CustomInputName = Template.bind({});
CustomInputName.args = {
    name: 'custom-name-file-picker',
    multiple: true,
    inputText: (files) => {
        if (files.length) {
            return 'custom file name';
        }
        return 'select file';
    },
};
export const Disabled = Template.bind({});
Disabled.args = {
    name: 'disable-file-picker',
    disabled: true,
};
