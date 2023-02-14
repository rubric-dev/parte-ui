import { RefObject, ReactNode } from 'react';

export type GroupOption = {
  title: string;
};

export interface DropdownProps {
  children?: ReactNode;
  usePortal?: boolean;
  offset?: number;
}

export interface DropdownContextState extends DropdownProps {
  isOpen: boolean;
  onClick?: () => void;
  onClose?: () => void;
  dropdownRef?: RefObject<HTMLDivElement>;
  menuRef?: React.RefObject<HTMLDivElement>;
}

export interface DropdownTriggerProps {
  children: React.ReactNode;
}
export interface DropdownMenuProps {
  children:
    | React.ReactNode
    | (({ onClose }: { onClose?: () => void }) => React.ReactNode);
}
