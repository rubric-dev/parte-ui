import { Story, Meta } from '@storybook/react';
import {
  GroupBase,
  MultiValue,
  OptionsOrGroups,
  SingleValue,
} from 'react-select';
import Select from './Select';
import { AsyncSelectProps, SelectAdditional } from './Select.types';
import { useState } from 'react';

export default {
  title: 'Components/Select/AsyncSelect',
  component: Select,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<
  AsyncSelectProps<string> & { isMulti?: boolean; isError?: boolean }
> = ({ isMulti, ...args }) => {
  const [selectedValue, setSelectedValue] =
    useState<Option<string>[] | SingleValue<Option<string>> | undefined>();
  const loadOptions = async (
    search: string,
    loadedOptions: OptionsOrGroups<Option<string>, GroupBase<Option<string>>>,
    additional: SelectAdditional = { page: 0 }
  ) => {
    const OPTION = [
      { label: `test1-${additional.page}`, value: `test1-${additional.page}` },
      { label: `test2-${additional.page}`, value: `test2-${additional.page}` },
      { label: `test3-${additional.page}`, value: `test3-${additional.page}` },
      { label: `test4-${additional.page}`, value: `test4-${additional.page}` },
      { label: `test5-${additional.page}`, value: `test5-${additional.page}` },
      { label: `test6-${additional.page}`, value: `test6-${additional.page}` },
    ];
    return {
      options: OPTION,
      hasMore: true,
      additional: {
        ...additional,
        page: (additional?.page ?? 0) + 1,
      },
    };
  };

  const onChange = (
    option: MultiValue<Option<string>> | SingleValue<Option<string>>
  ) => {
    if (typeof option === 'object' && !!option) {
      if (isMulti) {
        if ('length' in option) {
          const selected = option as Option<string>[];

          setSelectedValue(selected);
        } else {
          const selected = option as Option<string>;

          setSelectedValue([
            ...((selectedValue as Option<string>[]) ?? []),
            selected,
          ]);
        }

        return;
      }
      setSelectedValue(option as SingleValue<Option<string>>);
    }
  };

  return (
    <Select
      {...args}
      type="async"
      value={selectedValue}
      onChange={onChange}
      isMulti={isMulti}
      loadOptions={loadOptions}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isSearchable: false,
  isClearable: true,
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  label: 'TEST',
  description: '이것은 설명입니다.',
  required: true,
};

export const Multi = Template.bind({});
Multi.args = {
  isSearchable: false,
  isClearable: true,
  isMulti: true,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  errorText: 'this is error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

const GroupTemplate: Story<
  AsyncSelectProps<string> & { isMulti?: boolean; isError?: boolean }
> = ({ isMulti, ...args }) => {
  const loadOptions = async (
    search: string,
    loadedOptions: OptionsOrGroups<Option<string>, GroupBase<Option<string>>>,
    additional = 0
  ) => {
    const OPTION = [
      { label: `test1-${additional}`, value: `test1-${additional}` },
      { label: `test2-${additional}`, value: `test2-${additional}` },
      { label: `test3-${additional}`, value: `test3-${additional}` },
      { label: `test4-${additional}`, value: `test4-${additional}` },
      { label: `test5-${additional}`, value: `test5-${additional}` },
      { label: `test6-${additional}`, value: `test6-${additional}` },
    ];

    return {
      options: [{ options: OPTION, label: `${additional}번째 그룹` }],
      hasMore: true,
      additional: additional + 1,
    };
  };

  const [selectedValue, setSelectedValue] =
    useState<Option<string>[] | SingleValue<Option<string>> | undefined>();

  const onChange = (
    option: MultiValue<Option<string>> | SingleValue<Option<string>>
  ) => {
    if (typeof option === 'object' && !!option) {
      if (isMulti) {
        if ('length' in option) {
          const selected = option as Option<string>[];

          setSelectedValue(selected);
        } else {
          const selected = option as Option<string>;

          setSelectedValue([
            ...((selectedValue as Option<string>[]) ?? []),
            selected,
          ]);
        }

        return;
      }
      setSelectedValue(option as SingleValue<Option<string>>);
    }
  };

  return (
    <Select
      {...args}
      type="async"
      value={selectedValue}
      defaultOptions
      isMulti={isMulti}
      onChange={onChange}
      loadOptions={loadOptions}
    />
  );
};

export const GroupDefault = GroupTemplate.bind({});

GroupDefault.args = {
  isSearchable: false,
};

export const GroupMultiDefault = GroupTemplate.bind({});

GroupMultiDefault.args = {
  isMulti: true,
};
