import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { css } from 'styled-components';
import { Button } from '../Button';
import theme from '../common/theme';
import { Box } from '../Layout';
import Dialog from './Dialog';
import { DialogProps } from './Dialog.types';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const ScrollBox = () => (
  <Box
    overrideStyles={css`
      height: 1800px;
      width: 100%;
      background-color: ${theme.colors.N600};
    `}
  />
);

const Template: Story<DialogProps> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <div style={{ width: '100%', height: '1000px' }} />
      <Dialog
        onCloseComplete={() => setOpen(false)}
        title="Dialog Title"
        {...args}
        isShown={open}
      >
        {children}
      </Dialog>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  confirmVariant: 'primary',
  children: `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
  lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
  impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
  aperiam.`,
};
export const Error = Template.bind({});
Error.args = {
  confirmVariant: 'error',
  confirmLabel: '오류',
  width: 320,
  minHeightContent: 40,
  title: '에러 케이스',
  children: `오류가 발생했습니다`,
};
export const ScrollContent = Template.bind({});
ScrollContent.args = {
  confirmVariant: 'primary',
  children: <ScrollBox />,
};
