import { Story, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<DropdownProps> = ({ ...args }) => {
  return <Dropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
