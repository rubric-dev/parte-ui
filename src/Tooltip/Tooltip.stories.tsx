import Tooltip from './Tooltip';
import { Story, Meta } from '@storybook/react';
import { TooltipProps } from './Tooltip.types';
import { Position } from '../Positioner';
import * as Styled from './Tooltip.styled';
import Button from '../Button/Button';

export default {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<TooltipProps> = ({ children, ...args }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '50px',
        minHeight: '50vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'auto',
      }}
    >
      <Tooltip {...args}>{children}</Tooltip>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  position: Position.BOTTOM_RIGHT,
  content:
    'Segment syncs a list of users to these destinations and keeps it up to date.',
  children: <Button variant="primary">Click Me</Button>,
  hideDelay: 100,
  showDelay: 100,
};

const TooltipTemplate: Story<TooltipProps> = ({ children, ...args }) => {
  return <Styled.Content>툴팁의 내용</Styled.Content>;
};

export const TooltipContent = TooltipTemplate.bind({});
