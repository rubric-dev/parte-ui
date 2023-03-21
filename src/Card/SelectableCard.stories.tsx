import Card from './Card';
import { Story, Meta } from '@storybook/react';
import { CardProps } from './Card.types';
import { useState } from 'react';
import { Heading, Paragraph } from '../@foundations/Typography';

export default {
  title: 'Components/Card/SelectableCard',
  component: Card,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<CardProps> = ({ ...args }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Card
      flexDirection="column"
      padding={20}
      display="flex"
      type="selectable"
      selected={selected}
      onClick={() => setSelected((prev) => !prev)}
      {...args}
    >
      <Heading size={200}>Heading</Heading>
      <Paragraph size={300}>Paragraph</Paragraph>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
