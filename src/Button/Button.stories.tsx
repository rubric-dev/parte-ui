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

const Template: Story<ButtonProps> = (args) => {
  return (
    <Layout>
      <Row>
        <Button type="button" variant="default" size="lg" disabled={false}>
          텍스트 버튼
        </Button>
        <Button
          {...args}
          variant="default"
          fullWidth={false}
          size="lg"
          type="button"
        >
          텍스트 버튼
        </Button>
        <Button {...args} variant="default" size="lg">
          텍스트 버튼
        </Button>
      </Row>
      <Row style={{ marginBottom: '1em' }}>
        <Button {...args} variant="default" size="lg">
          텍스트 버튼
        </Button>
        <Button {...args} variant="default" size="lg">
          텍스트 버튼
        </Button>
        <Button {...args} variant="default" size="lg">
          텍스트 버튼
        </Button>
      </Row>
    </Layout>
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
