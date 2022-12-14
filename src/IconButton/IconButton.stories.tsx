import styled from 'styled-components';
import IconButton from './IconButton';
import { Story, Meta } from '@storybook/react';
import { IconButtonProps } from './IconButton.types';
import TableThIcon from '../parte-icons/Icons/TableThIcon';

export default {
  title: 'Components/IconButtons',
  component: IconButton,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<IconButtonProps> = ({ ...args }) => {
  return <IconButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  Icon: <TableThIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  Icon: <TableThIcon />,
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: 'minimal',
  Icon: <TableThIcon />,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  Icon: <TableThIcon />,
};
