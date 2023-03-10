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
import Dialog from './Dialog';
export default {
    title: 'Components/Overlays/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return (_jsx(Dialog, Object.assign({ title: "Dialog Title" }, args, { 
        // eslint-disable-next-line no-console
        close: () => console.log('close clicked!') }, { children: children })));
};
export const Default = Template.bind({});
Default.args = {
    width: 480,
    confirmVariant: 'primary',
    children: `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
  lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
  impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
  aperiam.`,
};
