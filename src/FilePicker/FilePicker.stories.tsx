import FilePicker from './FilePicker';
import { Story, Meta } from '@storybook/react';
import { FilePickerProps } from './FilePicker.types';

export default {
  title: 'Components/Forms/FilePicker',
  component: FilePicker,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<FilePickerProps> = ({ ...args }) => {
  return <FilePicker {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  name: 'default-file-picker',
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  name: 'label-file-picker',
  label: 'Label',
  description: 'This is Description',
};

export const MultipleFiles = Template.bind({});

MultipleFiles.args = {
  name: 'multi-file-picker',
  multiple: true,
};

export const CustomInputName = Template.bind({});

CustomInputName.args = {
  name: 'custom-name-file-picker',
  multiple: true,
  inputText: (files) => files.map((file) => file.name).join(', '),
};

export const Error = Template.bind({});

Error.args = {
  name: 'error-file-picker',
  errorMessage: 'error ocurred',
  // FIXME: 지우기
  occurError: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  name: 'disable-file-picker',
  disabled: true,
};
