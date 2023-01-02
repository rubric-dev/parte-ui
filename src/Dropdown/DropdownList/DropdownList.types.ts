export type DropdownListProps<T> = {
  options: Option<T>[] | GroupOption<T>[];
  selectValue?: Option<T>;
  onSelect?: (value: Option<T>) => void;
  isSearchable?: boolean;
  noOptionsText?: string;
};
