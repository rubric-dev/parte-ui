import { jsx as _jsx } from "react/jsx-runtime";
import Step from './Step/Step';
import * as Styled from './Steps.styled';
const Steps = ({ stepList, currentStep }) => {
    return (_jsx(Styled.Steps, { children: stepList.map((step, index) => (_jsx(Step, { currentStep: currentStep, stepIndex: index, label: step.label }, step.id))) }));
};
export default Steps;
