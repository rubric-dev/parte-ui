import React, { HTMLAttributes } from 'react';

export type DropdownListProps<T> = {
  options: Option<T>[] | GroupOption<T>[];
  value?: Option<T>;
  isSearchable?: boolean;
};
