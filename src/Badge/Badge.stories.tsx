import { Story, Meta } from '@storybook/react';
import { BadgeProps } from './Badge.types';
import Badge from './Badge';

export default {
  title: 'Components/Badges',
  component: Badge,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<BadgeProps> = ({ ...args }) => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: '555',
  badgeColor: 'AUTO',
};
