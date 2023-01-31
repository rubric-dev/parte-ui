import MenuGroup from './MenuGroup';
import { Story, Meta } from '@storybook/react';
import { MenuGroupProps } from './MenuGroup.types';
import { MenuRow } from '../MenuRow';

export default {
  title: 'Components/Menu/MenuGroup',
  component: MenuGroup,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<MenuGroupProps> = ({ ...args }) => {
  return (
    <MenuGroup {...args}>
      <MenuRow>Label 1</MenuRow>
      <MenuRow>Label 2</MenuRow>
      <MenuRow>Label 3</MenuRow>
    </MenuGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'title',
};
