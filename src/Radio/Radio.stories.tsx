import Radio from './Radio';
import { Story, Meta } from '@storybook/react';
import { RadioProps } from './Radio.types';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<RadioProps> = ({ ...args }) => {
  return <Radio {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'TEST',
  value: 'TEST',
  disabled: false,
};
