import TextInput from './TextInput';
import { Story, Meta } from '@storybook/react';
import { TextInputProps } from './TextInput.types';
import ActionSearchIcon from '../parte-icons/Icons/ActionSearchIcon';
import InterfaceCaretDownIcon from '../parte-icons/Icons/InterfaceCaretDownIcon';
import ActionCrossIcon from '../parte-icons/Icons/ActionCrossIcon';

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<TextInputProps> = ({ ...args }) => {
  return <TextInput {...args} placeholder="Placeholder" />;
};

export const Default = Template.bind({});
Default.args = {};

export const Search = Template.bind({});
Search.args = {
  leadingIcon: <ActionSearchIcon size={12} color="muted" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  leadingIcon: <ActionSearchIcon size={12} color="muted" />,
  trailingIcon: (
    <div style={{ display: 'flex', gap: '8px' }}>
      <ActionCrossIcon size={12} color="muted" />
      <InterfaceCaretDownIcon size={12} color="muted" />
    </div>
  ),
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  trailingIcon: <ActionSearchIcon size={12} color="muted" />,
  errorText: 'error!!',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
  label: 'Label',
  required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: 'Label',
  description: 'Description',
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  leadingIcon: <ActionSearchIcon size={12} color="muted" />,
  trailingIcon: <InterfaceCaretDownIcon size={12} color="muted" />,
};

export const WithManyIcon = Template.bind({});
WithManyIcon.args = {
  leadingIcon: <ActionSearchIcon size={12} color="muted" />,
  trailingIcon: (
    // 여기는 어떻게 하는게 좋을까요
    // 오른쪽에 2개의 아이콘이 들어갈 경우가있는데, 두 아이콘 사이의 간격은 항상 8px 이어야합니다.
    // 그런데 사용측에서 직접 8px을 넘겨줘야해요
    <div style={{ display: 'flex', gap: '8px' }}>
      <ActionCrossIcon size={12} color="muted" />
      <InterfaceCaretDownIcon size={12} color="muted" />
    </div>
  ),
};
