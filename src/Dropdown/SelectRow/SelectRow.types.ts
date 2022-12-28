import { ChangeEvent, ReactNode } from 'react';

export type SelectRowType = 'search' | 'title' | 'element';

type SelectRowElement = {
  variant?: 'element';
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
};
type SelectRowSearch = {
  variant: 'search';
  inputValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};
type SelectRowTitle = {
  variant: 'title';
  label?: string;
  icon?: ReactNode;
};

export type SelectRowProps =
  | SelectRowElement
  | SelectRowSearch
  | SelectRowTitle;
