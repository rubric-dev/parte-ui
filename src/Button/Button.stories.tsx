import styled from 'styled-components';
import Button from './Button';

import { Story, Meta } from '@storybook/react';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Template: Story<ButtonProps> = ({ children, ...args }) => {
  return <Button {...args}>{children}테스트 버튼입니다.</Button>;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'flat',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Menu = Template.bind({});
Menu.args = {
  variant: 'menu',
};
