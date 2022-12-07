import DropdownList from './DropdownList';
import { Story, Meta } from '@storybook/react';
import { DropdownListProps } from './DropdownList.types';

export default {
  title: 'Components/Dropdown/DropdownList',
  component: DropdownList,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<DropdownListProps<string>> = ({ ...args }) => {
  return <DropdownList {...args} />;
};

const OPTION = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
  {
    label: 'label3',
    value: 'value2',
  },
];

const GROUPOPTION: GroupOption<string>[] = [
  { groupName: '김대균', options: OPTION },
  { groupName: '서솔민', options: OPTION },
  { groupName: '도혜원', options: OPTION },
];
export const Default = Template.bind({});
Default.args = {
  options: OPTION,
};
export const GroupOptions = Template.bind({});
GroupOptions.args = {
  options: GROUPOPTION,
  isSearchable: true,
};
