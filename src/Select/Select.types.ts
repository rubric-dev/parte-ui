import { GroupBase, Props, OptionsOrGroups } from 'react-select';
import { AsyncPaginateProps } from 'react-select-async-paginate';

export type SelectAdditional =
  | {
      page: number;
      optionIds?: string[];
    }
  | undefined;

type CommonSelectProps = {
  label?: string;
  description?: string;
  required?: boolean;
  isError?: boolean;
  errorText?: string;
};

export type StaticSelectProps<T> = CommonSelectProps &
  Props<Option<T>, boolean, GroupBase<Option<T>>> & {
    type: 'static';
  };

export type AsyncSelectProps<T> = CommonSelectProps &
  AsyncPaginateProps<Option<T>, GroupBase<Option<T>>, any, boolean> & {
    type: 'async';
    defaultValue?: Option<T>;
    options?: OptionsOrGroups<Option<T>, GroupOption<T>>;
  };

export type SelectProps<T> = StaticSelectProps<T> | AsyncSelectProps<T>;
