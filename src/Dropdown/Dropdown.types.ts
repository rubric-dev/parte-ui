import React, { HTMLAttributes, RefObject, ReactNode } from 'react';

export type GroupOption<T> = {
  title: string;
};
export type DropdownContextState<T> = {
  type?: 'single' | 'multi';
  isOpen?: boolean;
  value?: Option<T>;
  onClick?: () => void;
  // onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClose?: () => void;
  usePortal?: boolean;
  dropdownRef?: RefObject<HTMLDivElement>;
  offset?: number;
  children?: ReactNode;
};
