import Tab from './Tab';
import { Story, Meta } from '@storybook/react';
import { TabProps } from './Tab.types';
import ActionLockIcon from '../parte-icons/Icons/ActionLockIcon';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<TabProps> = ({ ...args }) => {
  return <Tab {...args}>Label</Tab>;
};

export const Default = Template.bind({});
Default.args = {};
export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Icon = Template.bind({});
Icon.args = {
  rightSlot: <ActionLockIcon size={12} />,
};
export const IconDisabled = Template.bind({});
IconDisabled.args = {
  rightSlot: <ActionLockIcon size={12} />,
  disabled: true,
};
