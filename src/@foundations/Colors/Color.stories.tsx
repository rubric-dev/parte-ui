import styled from 'styled-components';
import ColorList from './ColorList';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Foundation/Color',
  component: ColorList,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story = ({ children, ...args }) => {
  return <ColorList />;
};

export const Default = Template.bind({});
