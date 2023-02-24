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
  LoadingIndicatorProps,
  MultiValueRemoveProps,
  ClearIndicatorProps,
  DropdownIndicatorProps,
} from 'react-select';
import InterfaceCaretDownIcon from '../parte-icons/Icons/InterfaceCaretDownIcon';
import ActionSearchIcon from '../parte-icons/Icons/ActionSearchIcon';
import ActionUploadingSmallIcon from '../parte-icons/Icons/ActionUploadingSmallIcon';
import ActionSmallCrossIcon from '../parte-icons/Icons/ActionSmallCrossIcon';
import ActionDeleteIcon from '../parte-icons/Icons/ActionDeleteIcon';
import { ComponentType, useMemo } from 'react';
import { getStyles } from './util';
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
      <ActionSearchIcon size={12} />
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
const LoadingIndicator = ({
  ...props
}: LoadingIndicatorProps<Option<unknown>, boolean>) => {
  return (
    <components.LoadingIndicator {...props}>
      <ActionUploadingSmallIcon size={12} />
    </components.LoadingIndicator>
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

export const NoOptionsMessage = () => {
  return 'No options found';
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
  } = props;

  const styles = getStyles({ isError }) as StylesConfig<Option<T>, boolean>;

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
      LoadingIndicator: LoadingIndicator as ComponentType<
        LoadingIndicatorProps<Option<T>, boolean, GroupBase<Option<T>>>
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
    }),
    []
  );

  const onChangeSelect = (
    newValue: MultiValue<Option<T>> | SingleValue<Option<T>>,
    actionMeta: ActionMeta<Option<T>>
  ) => {
    if (!newValue) {
      return;
    }
    onChange?.(newValue, actionMeta);
  };

  const asyncComponents: any = useComponents(defaultComponents);

  const SelectComponent =
    type === 'static' ? (
      <StaticSelect
        {...props}
        isDisabled={isDisabled}
        onChange={onChangeSelect}
        value={value}
        components={defaultComponents}
        hideSelectedOptions={isMulti}
        styles={styles}
        placeholder={placeholder}
        isClearable
        isSearchable
        closeMenuOnSelect={!isMulti}
        noOptionsMessage={NoOptionsMessage}
      />
    ) : (
      <AsyncPaginate
        {...props}
        isDisabled={isDisabled}
        onChange={onChangeSelect}
        value={value}
        components={asyncComponents}
        hideSelectedOptions={isMulti}
        styles={styles}
        placeholder={placeholder}
        isClearable
        isSearchable
        closeMenuOnSelect={!isMulti}
        noOptionsMessage={NoOptionsMessage}
      />
    );

  return (
    <Box direction="column">
      {(label || description) && (
        <Box gap={4} direction="column" marginBottom={8}>
          <Box alignItems="Start" gap={1}>
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
