import { Story, Meta } from '@storybook/react';
import { Button } from '../Button';
import Dropdown from './Dropdown';
import { DropdownList } from './DropdownList';
import { DropdownContextState } from './Dropdown.types';
import { useState } from 'react';

const OPTIONS = [
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
    label: '1-0',
    value: '1-0',
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

export const Default = Template.bind({});

Default.args = {};

export const Portal = Template.bind({});

Portal.args = {
  usePortal: true,
};
