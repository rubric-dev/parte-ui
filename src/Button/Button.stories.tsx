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

const Template: Story<ButtonProps> = ({ children, ...args }) => {
  return <Button {...args}>button</Button>;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: 'minimal',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};
