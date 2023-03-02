import Step from './Step';
import { Story, Meta } from '@storybook/react';
import { StepProps } from './Step.types';

export default {
  title: 'Components/Controls/Steps/Step',
  component: Step,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<StepProps> = ({ ...args }) => {
  return <Step {...args} />;
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
