import { DROPDOWN_POSITION } from '../constant';

declare global {
  type Option<T> = {
    label: string;
    value: T;
    disabled?: boolean;
    icon?: React.ReactNode;
  };
  type GroupOption<T> = {
    groupName: string;
    options: Option<T>[];
  };
  type DropdownPosition =
    typeof DROPDOWN_POSITION[keyof typeof DROPDOWN_POSITION];
}
