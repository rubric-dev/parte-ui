import { DROPDOWN_POSITION } from '../constant';

export {};

declare global {
  type Option<T> = {
    label: string;
    value: T;
    disabled?: boolean;
  };
  type GroupOption<T> = {
    groupName: string;
    options: Option<T>[];
  };
  type DropdownPosition =
    typeof DROPDOWN_POSITION[keyof typeof DROPDOWN_POSITION];
}
