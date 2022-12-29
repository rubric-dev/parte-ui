import { Story, Meta } from '@storybook/react';
import { Button } from '../Button';
import Dropdown from './Dropdown';
import { DropdownList } from './DropdownList';
import { DropdownContextState } from './Dropdown.types';
import { useState } from 'react';
import ActionChatIcon from '../parte-icons/Icons/ActionChatIcon';

const OPTIONS: Option<string>[] = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label1',
    value: 'value1',
    disabled: true,
    icon: <ActionChatIcon size={12} />,
  },
  {
    label: 'label1',
    value: 'value1',
    icon: <ActionChatIcon size={12} />,
  },
];
const GROUP_OPTIONS: GroupOption<string>[] = [
  {
    groupName: '선민호',
    options: [
      {
        label: 'label1-1',
        value: 'value1-1',
      },
      {
        label: 'label1-2',
        value: 'value1-2',
        disabled: true,
        icon: <ActionChatIcon size={12} />,
      },
      {
        label: 'label1-3',
        value: 'value1-3',
        icon: <ActionChatIcon size={12} />,
      },
    ],
  },
  {
    groupName: '서솔민',
    options: [
      {
        label: 'label2-1',
        value: 'value2-1',
      },
      {
        label: 'label2-2',
        value: 'value2-2',
        disabled: true,
        icon: <ActionChatIcon size={12} />,
      },
      {
        label: 'label2-3',
        value: 'value2-3',
        icon: <ActionChatIcon size={12} />,
      },
    ],
  },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<DropdownContextState<string>> = ({ ...args }) => {
  const [selectValue, setSelectValue] = useState<Option<string>>({
    label: 'label3',
    value: 'value3',
  });

  const onSelect = (value: Option<string>) => {
    setSelectValue(value);
  };
  return (
    <div
      style={{
        height: '1600px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        // alignItems: 'flex-end',
      }}
    >
      {/* <div style={{ width: '100%', height: '500px' }}>스크롤용</div> */}
      <Dropdown {...args}>
        <Dropdown.Trigger>
          <Button variant="primary">{selectValue.label}</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <DropdownList
            options={OPTIONS}
            selectValue={selectValue}
            onSelect={onSelect}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const GroupedTemplate: Story<
  DropdownContextState<string> & { isSearchable?: boolean }
> = ({ isSearchable, ...args }) => {
  const [selectValue, setSelectValue] = useState<Option<string>>();

  const onSelect = (value: Option<string>) => {
    setSelectValue(value);
  };
  return (
    <div
      style={{
        height: '1600px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        // alignItems: 'flex-end',
      }}
    >
      {/* <div style={{ width: '100%', height: '500px' }}>스크롤용</div> */}
      <Dropdown {...args}>
        <Dropdown.Trigger>
          <Button variant="primary">{selectValue?.label ?? 'empty'}</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <DropdownList
            options={GROUP_OPTIONS}
            selectValue={selectValue}
            onSelect={onSelect}
            isSearchable={isSearchable}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};

export const Portal = Template.bind({});

Portal.args = {
  usePortal: true,
};
export const Grouped = GroupedTemplate.bind({});
export const GroupedSearch = GroupedTemplate.bind({});

Grouped.args = {};
GroupedSearch.args = { isSearchable: true };
