import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ActionTickIcon from '../../icons/Icons/ActionTickIcon';
import * as Styled from './Step.styled';
function Step({ label, currentStep, stepIndex }) {
    const stepValidator = () => {
        if (stepIndex === currentStep) {
            return 'inProgress';
        }
        else if (stepIndex < currentStep) {
            return 'complete';
        }
        return 'notStarted';
    };
    const stepStatus = stepValidator();
    return (_jsxs(Styled.Container, Object.assign({ gap: 8 }, { children: [_jsx(Styled.Icon, Object.assign({ status: stepStatus }, { children: stepStatus === 'complete' ? (_jsx(ActionTickIcon, { size: 8, color: "success" })) : (stepIndex) })), _jsx(Styled.Label, Object.assign({ status: stepStatus }, { children: label }))] })));
}
export default Step;
