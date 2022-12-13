import React, { HTMLAttributes } from 'react';

export type GroupOption<T> = {
  title: string;
};

export type DropdownProps<T> = {
  isGroupSelect?: boolean;
  isSearchable?: boolean;
  children: React.ReactNode;
};
