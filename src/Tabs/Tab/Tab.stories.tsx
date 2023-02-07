import Tab from './Tab';
import { Story, Meta } from '@storybook/react';
import { TabProps } from './Tab.types';
import ActionLockIcon from '../../parte-icons/Icons/ActionLockIcon';

export default {
  title: 'Components/Controls/Tabs/Tab',
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
  trailingIcon: <ActionLockIcon size={12} />,
};
export const IconDisabled = Template.bind({});
IconDisabled.args = {
  trailingIcon: <ActionLockIcon size={12} />,
  disabled: true,
  variant: 'Primary',
};
