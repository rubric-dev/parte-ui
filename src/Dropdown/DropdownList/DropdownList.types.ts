type DropdownListBaseProps<T> = {
  options: Option<T>[] | GroupOption<T>[];
  value?: Option<T>;
  onSelect?: (value: Option<T>) => void;
  onChange?: (value: Option<T> | Option<T>[]) => void;
  isSearchable?: boolean;
  noOptionsText?: string;
  isMulti?: boolean;
  closeOnSelect?: boolean;
};

type DropdownListMultiProps<T> = Omit<
  DropdownListBaseProps<T>,
  'value' | 'isMulti'
> & {
  isMulti: true;
  value?: Option<T>[];
};

export type DropdownListProps<T> =
  | DropdownListBaseProps<T>
  | DropdownListMultiProps<T>;
