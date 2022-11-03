import styled from 'styled-components';
import Card from './Card';

import { Story, Meta } from '@storybook/react';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card/Card',
  component: Card,
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

const Template: Story<CardProps> = (args) => {
  return (
    <Layout>
      <Row>
        <Card {...args} size="lg">
          저는 카드입니다.
        </Card>
      </Row>
      <Row style={{ marginBottom: '1em' }}>
        <Card {...args}>저는 카드입니다2.</Card>
      </Row>
    </Layout>
  );
};

export const Default = Template.bind({});
