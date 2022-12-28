import { Story, Meta } from '@storybook/react';
import { Button } from '../Button';
import Dropdown from './Dropdown';
import { DropdownList } from './DropdownList';
import { DropdownContextState } from './Dropdown.types';
import { useState } from 'react';

const OPTIONS: Option<string>[] = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
    disabled: true,
  },
  {
    label: 'label3',
    value: 'value3',
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

const createOption = (groupNames: string[]) => {
  return groupNames.map((gn, index) => {
    return {
      groupName: gn,
      options: groupNames.map((x, xindex) => {
        return { label: `${index}-${xindex}`, value: `${index}-${xindex}` };
      }),
    };
  });
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
            options={createOption(['선민호', '서솔민', '김대균', '도혜원'])}
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
