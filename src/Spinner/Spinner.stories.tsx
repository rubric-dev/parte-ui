import { Story, Meta } from '@storybook/react';
import { SpinnerProps } from './Spinner.types';
import Spinner from './Spinner';
import { Box } from '../Layout';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<SpinnerProps> = ({ size }) => {
  return (
    <Box
      display="flex"
      width="100%"
      height="90vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size={size} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 24,
};
