import { AsyncPaginate, useComponents } from 'react-select-async-paginate';
import StaticSelect, {
  ActionMeta,
  ControlProps,
  GroupBase,
  MultiValue,
  SingleValue,
  StylesConfig,
  components,
  IndicatorsContainerProps,
  MultiValueRemoveProps,
  ClearIndicatorProps,
  DropdownIndicatorProps,
  OptionProps,
  SelectInstance,
} from 'react-select';
import InterfaceCaretDownIcon from '../parte-icons/Icons/InterfaceCaretDownIcon';
import ActionSearchIcon from '../parte-icons/Icons/ActionSearchIcon';
import ActionUploadingSmallIcon from '../parte-icons/Icons/ActionUploadingSmallIcon';
import ActionSmallCrossIcon from '../parte-icons/Icons/ActionSmallCrossIcon';
import ActionDeleteIcon from '../parte-icons/Icons/ActionDeleteIcon';
import {
  ComponentType,
  KeyboardEventHandler,
  useMemo,
  useRef,
  useState,
} from 'react';
import useSelectStyle from './useSelectStyle';
import { SelectProps } from './Select.types';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { Box } from '../Layout';
import { Caption, Heading, Paragraph } from '../@foundations/Typography';

export const Control = ({
  children,
  ...props
}: ControlProps<Option<unknown>, boolean>) => {
  return (
    <components.Control {...props}>
      <Box marginTop={2} display="flex" alignItems="center">
        <ActionSearchIcon size={12} />
      </Box>
      {children}
    </components.Control>
  );
};

const MultiValueRemove = ({
  ...props
}: MultiValueRemoveProps<Option<unknown>, boolean>) => {
  return (
    <components.MultiValueRemove {...props}>
      <ActionSmallCrossIcon size={12} />
    </components.MultiValueRemove>
  );
};

const LoadingMessage = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="120px"
      alignItems="center"
      justifyContent="center"
    >
      <ActionUploadingSmallIcon size={12} color="muted" />
    </Box>
  );
};

export const IndicatorsContainer = ({
  children,
  ...props
}: IndicatorsContainerProps<Option<unknown>, boolean>) => {
  return (
    <components.IndicatorsContainer {...props}>
      {children}
    </components.IndicatorsContainer>
  );
};

export const ClearIndicator = ({
  children,
  ...props
}: ClearIndicatorProps<Option<unknown>, boolean>) => {
  return (
    <components.ClearIndicator {...props}>
      <ActionDeleteIcon size={12} />
    </components.ClearIndicator>
  );
};

export const DropdownIndicator = ({
  children,
  ...props
}: DropdownIndicatorProps<Option<unknown>, boolean>) => {
  return (
    <components.DropdownIndicator {...props}>
      <InterfaceCaretDownIcon size={12} />
    </components.DropdownIndicator>
  );
};

export const Option = ({
  children,
  ...props
}: OptionProps<Option<unknown>, boolean>) => {
  const { label, icon } = props.data;
  return (
    <components.Option {...props}>
      {icon} {label}
    </components.Option>
  );
};

export const NoOptionsMessage = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="120px"
      alignItems="center"
      justifyContent="center"
    >
      <Paragraph size={100} color="N800">
        No options found
      </Paragraph>
    </Box>
  );
};

export default function Select<T>(props: SelectProps<T>) {
  const {
    placeholder = 'Select Event',
    isDisabled = false,
    isError = false,
    isMulti = false,
    errorText,
    value,
    onChange,
    type,
    label,
    description,
    required,
    menuIsOpen,
  } = props;

  const styles = useSelectStyle({ isError }) as StylesConfig<
    Option<T>,
    boolean
  >;

  /** isMulti가 true일때만 관리하면되는값 */
  const [showMenuList, setShowMenuList] = useState(false);

  const selectRef =
    useRef<SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>>(null);

  const defaultComponents: Partial<
    SelectComponents<Option<T>, boolean, GroupBase<Option<T>>>
  > = useMemo(
    () => ({
      Control: Control as ComponentType<
        ControlProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      IndicatorsContainer: IndicatorsContainer as ComponentType<
        IndicatorsContainerProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      MultiValueRemove: MultiValueRemove as ComponentType<
        MultiValueRemoveProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      DropdownIndicator: DropdownIndicator as ComponentType<
        DropdownIndicatorProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      ClearIndicator: ClearIndicator as ComponentType<
        ClearIndicatorProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      Option: Option as ComponentType<
        OptionProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      LoadingMessage,
      NoOptionsMessage,
    }),
    []
  );
  const asyncComponents = useComponents(defaultComponents);

  const onChangeSelect = (
    newValue: MultiValue<Option<T>> | SingleValue<Option<T>>,
    actionMeta: ActionMeta<Option<T>>
  ) => {
    if (!newValue) {
      return;
    }
    onChange?.(newValue, actionMeta);
  };

  const onFocus = () => isMulti && setShowMenuList(true);
  const onBlur = () => isMulti && setShowMenuList(false);
  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') {
      selectRef.current?.blur();
    }
  };

  const SelectComponent =
    type === 'static' ? (
      <StaticSelect
        components={defaultComponents}
        {...props}
        ref={selectRef}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        isDisabled={isDisabled}
        onChange={onChangeSelect}
        value={value}
        hideSelectedOptions={isMulti}
        styles={styles}
        placeholder={placeholder}
        isClearable
        isSearchable
        menuIsOpen={isMulti ? showMenuList ?? menuIsOpen : menuIsOpen}
        closeMenuOnSelect={!isMulti}
      />
    ) : (
      <AsyncPaginate
        components={asyncComponents}
        {...props}
        selectRef={selectRef}
        isDisabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={onChangeSelect}
        value={value}
        hideSelectedOptions={isMulti}
        styles={styles}
        placeholder={placeholder}
        isClearable
        isSearchable
        menuIsOpen={isMulti ? showMenuList ?? menuIsOpen : menuIsOpen}
        closeMenuOnSelect={!isMulti}
      />
    );

  return (
    <Box flexDirection="column" display="flex">
      {(label || description) && (
        <Box gap={4} flexDirection="column" marginBottom={8} display="flex">
          <Box alignItems="flex-start" gap={1} display="flex">
            {required && (
              <Caption size={200} color="R400">
                *
              </Caption>
            )}
            <Heading size={400} color="N800">
              {label}
            </Heading>
          </Box>
          {description && (
            <Paragraph size={100} color="N700">
              {description}
            </Paragraph>
          )}
        </Box>
      )}
      {SelectComponent}
      {isError && errorText && (
        <Paragraph size={100} color="R400" marginTop={2}>
          {errorText}
        </Paragraph>
      )}
    </Box>
  );
}
