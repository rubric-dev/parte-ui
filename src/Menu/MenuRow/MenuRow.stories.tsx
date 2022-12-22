import MenuRow from './MenuRow';
import { Story, Meta } from '@storybook/react';
import { MenuRowProps } from './MenuRow.types';
import ActionChatIcon from '../../parte-icons/Icons/ActionChatIcon';
import { useState } from 'react';

export default {
  title: 'Components/Menu/MenuRow',
  component: MenuRow,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<MenuRowProps> = ({ ...args }) => {
  return <MenuRow {...args}>Menu Row</MenuRow>;
};
const ClickableTemplate: Story<MenuRowProps> = ({ ...args }) => {
  const [selected, setSeleted] = useState(false);
  return (
    <MenuRow
      selected={selected}
      onSelect={() => setSeleted((prev) => !prev)}
      {...args}
    >
      Menu Row
    </MenuRow>
  );
};
export const Default = Template.bind({});
Default.args = {
  selected: false,
};
export const Icon = Template.bind({});
Icon.args = {
  leftSlot: <ActionChatIcon size={16} />,
};
export const Title = Template.bind({});
Title.args = {
  type: 'title',
};
export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
  selected: false,
};
export const Clickable = ClickableTemplate.bind({});
