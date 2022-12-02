import Step from './Step/Step';
import * as Styled from './Steps.styled';
import { StepsProps } from './Steps.types';

const Steps = ({ stepList, currentStep }: StepsProps) => {
  return (
    <Styled.Steps>
      {stepList.map((step, index) => (
        <Step currentStep={currentStep} stepIndex={index} label={step.label} />
      ))}
    </Styled.Steps>
  );
};

export default Steps;
