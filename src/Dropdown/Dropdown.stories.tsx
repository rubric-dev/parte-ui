import { Story, Meta } from '@storybook/react';
import { Button } from '../Button';
import Dropdown from './Dropdown';

import { SelectRow } from './SelectRow';
import { DropdownList } from './DropdownList';
import { DropdownContextState } from './Dropdown.types';

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
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button variant="primary">Button</Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <DropdownList options={OPTIONS} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Default = Template.bind({});

Default.args = {};
