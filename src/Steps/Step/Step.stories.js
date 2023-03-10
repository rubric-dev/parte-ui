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
import Step from './Step';
export default {
    title: 'Components/Controls/Steps/Step',
    component: Step,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Step, Object.assign({}, args));
};
export const Default = Template.bind({});
Default.args = {
    label: 'Not Started',
    currentStep: 0,
    stepIndex: 1,
};
export const InProgress = Template.bind({});
InProgress.args = { label: 'In Progress', currentStep: 1, stepIndex: 1 };
export const Complete = Template.bind({});
Complete.args = { label: 'Complete', currentStep: 2, stepIndex: 1 };
