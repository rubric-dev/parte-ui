import IconButton from './IconButton';
import { Story, Meta } from '@storybook/react';
import { IconButtonProps } from './IconButton.types';
import TableThIcon from '../parte-icons/Icons/TableThIcon';

export default {
  title: 'Components/Buttons/IconButton',
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
  size: 32,
  Icon: <TableThIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  Icon: <TableThIcon />,
  size: 32,
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: 'minimal',
  Icon: <TableThIcon />,
  size: 32,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  Icon: <TableThIcon />,
  size: 32,
};
