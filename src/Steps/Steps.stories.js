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
import Steps from './Steps';
export default {
    title: 'Components/Controls/Steps',
    component: Steps,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = (_a) => {
    var args = __rest(_a, []);
    return _jsx(Steps, Object.assign({}, args));
};
const MOCK = [
    {
        name: '냉장고 확인',
    },
    {
        name: '운전해서 상점으로 가기',
    },
    {
        name: '필요한 것 구입하기',
    },
    {
        name: '운전해서 집으로 오기',
    },
    {
        name: '음식을 냉장고에 보관하기',
    },
].map((v, i) => {
    return {
        id: i,
        label: v.name,
    };
});
export const Default = Template.bind({});
Default.args = {
    stepList: MOCK,
    currentStep: MOCK.findIndex((v) => v.id === 3),
};
