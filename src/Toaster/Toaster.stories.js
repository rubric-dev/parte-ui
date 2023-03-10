import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toaster from '.';
import Alert from '../Alerts/Alert';
import { Button } from '../Button';
export default {
    title: 'Components/Alerts/Toaster',
    component: Alert,
    parameters: {
        layout: 'centered',
        viewport: 'responsive',
    },
};
const Template = () => {
    return (_jsxs("div", Object.assign({ style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, { children: [_jsx(Button, Object.assign({ variant: "primary", onClick: () => toaster.notify({
                    title: '헤벌레',
                    status: 'warning',
                    description: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
                }) }, { children: "\uB10B\uC774 \uB098\uAC00\uC788\uB294 \uBC8C\uB808\uB294" })), _jsx(Button, Object.assign({ variant: "primary", onClick: () => toaster.notify({
                    title: '미식가세요?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅇㅋㅋㅋㅎㅋㅋㅋㅋ',
                    status: 'error',
                }) }, { children: "\uC18D\uC774 \uC880 \uBBF8\uC2DD\uAC70\uB824\uBCF4\uC774\uC2DC\uB124\uC694" })), _jsx(Button, Object.assign({ variant: "primary", onClick: () => toaster.notify({
                    title: '수정과',
                    status: 'info',
                    description: '이게 잣인감?ㅋㅋㅋㅋㅋㅋㅋㅋ엌ㅋㅋㅋㅋㅋㅋ',
                }) }, { children: "\uC790\uC2E0\uAC10\uC5C6\uC744\uB54C \uBA39\uB294 \uCC28\uB294" })), _jsx(Button, Object.assign({ variant: "primary", onClick: () => toaster.notify({
                    title: 'g.o.d',
                    status: 'success',
                    description: '지오디? ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ엌 ㅋㅋㅋㅋㅋㅋ엌ㅋㅋㅋㅋ',
                }) }, { children: "\uC950\uAC00 \uC5B4\uB514\uC788\uC9C0, \uC950\uAC00 \uC5B4\uB514\uAC14\uC9C0" }))] })));
};
export const Default = Template.bind({});
Default.args = {};
