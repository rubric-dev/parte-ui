import styled from 'styled-components';
import Avatar from './Avatar';
import { Story, Meta } from '@storybook/react';
import { AvatarProps } from './Avatar.types';

export default {
  title: 'Components/Avatars',
  component: Avatar,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<AvatarProps> = ({ children, ...args }) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  avatarColor: 'AUTO',
  name: 'solmin Seo',
  src: 'https://avatars.githubusercontent.com/u/40189520?v=4',
  showInitial: true,
};
