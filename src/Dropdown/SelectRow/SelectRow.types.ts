import { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

export type SelectRowType = 'search' | 'title' | 'element';

type SelectRowElement = {
  variant?: 'element';
  children?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
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
  children?: ReactNode;
  icon?: ReactNode;
};

export type SelectRowProps =
  | SelectRowElement
  | SelectRowSearch
  | SelectRowTitle;
