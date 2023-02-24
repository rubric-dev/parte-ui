import { StylesConfig } from 'react-select';

export const getStyles = ({
  isError,
}: {
  isError: boolean;
}): StylesConfig<Option<unknown>, boolean> => ({
  container: (css, props) => {
    return {
      ...css,
      width: '100%',
      backgroundColor: '#ffffff',
      svg: {
        color: props.isDisabled ? '#C1C4D6' : '#8F95B2',
      },
    };
  },
  control: (css, props) => {
    return {
      ...css,
      minHeight: 'unset',
      height: 'fit-content',
      borderRadius: '4px',
      backgroundColor: '#ffffff',
      // 원래는 상하 패딩은 8인데, border는 control 컴포넌트에서 관리하기때문에, boxSizing이 적용안됨
      padding: '7px 10px 7px 12px',
      display: 'flex',
      svg: {
        color: '#8F95B2',
      },
      '&:hover': {
        borderColor: '#9DB5FF',
      },
      ...(props.isFocused
        ? {
            borderColor: '#9DB5FF',
            boxShadow: '0 0 0 2px #D6E0FF',
          }
        : {
            boxShadow: 'none',
            borderColor: '#D8DAE5',
            '&:hover': {
              borderColor: '#8F95B2',
              '& div[id$=placeholder]': {
                color: '#696F8C !important',
              },
            },
          }),
      ...(isError
        ? {
            boxShadow: 'none',
            borderColor: '#D14343 !important',
          }
        : {}),
      ...(props.isDisabled
        ? {
            borderColor: '#E6E8F0',
            backgroundColor: '#F4F6FA !important',
            svg: {
              color: '#C1C4D6',
            },
          }
        : {}),
    };
  },
  groupHeading: (css) => ({
    ...css,
    height: '32px',
    color: '#8F95B2',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    boxSizing: 'border-box',
  }),
  group: (css) => ({ ...css, padding: '0' }),
  noOptionsMessage: (css) => ({
    ...css,
    height: '120px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: '#474D66',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
  }),
  multiValue: (css, props) => ({
    ...css,
    backgroundColor: '#EDEFF5',
    borderRadius: '4px',
    margin: 0,
    padding: '0 4px',
    display: 'flex',
    columnGap: '2px',
    ...(isError ? { backgroundColor: '#F9DADA' } : {}),
    ...(props.isDisabled ? { backgroundColor: '#F4F6FA' } : {}),
  }),
  multiValueLabel: (css, props) => ({
    ...css,
    padding: '0px !important',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#474D66',
    ...(props.isDisabled
      ? {
          color: '#C1C4D6',
        }
      : {}),
  }),
  multiValueRemove: (css, props) => ({
    ...css,
    padding: '0px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    svg: {
      color: '#474D66',
    },
    ...(isError
      ? {
          svg: { color: '#8F95B2' },
        }
      : {}),
    ...(props.isDisabled
      ? {
          svg: {
            color: '#C1C4D6',
          },
        }
      : {}),
  }),
  menu: (css, props) => {
    return {
      ...css,
      marginTop: '4px',
      borderRadius: '4px',
    };
  },
  menuList: (css, props) => {
    return { ...css, padding: '0', borderRadius: '4px' };
  },
  valueContainer: (css, props) => {
    return {
      ...css,
      padding: '0',
      paddingLeft: '8px',
      ...(props.isMulti
        ? {
            gap: '8px',
          }
        : {}),
    };
  },
  singleValue: (css, props) => ({
    ...css,
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#474D66',
    ...(props.isDisabled ? { color: '#8F95B2' } : {}),
  }),
  placeholder: (css, props) => ({
    ...css,
    padding: 0,
    margin: 0,
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#8F95B2',
    ...(props.isFocused ? { color: '#696F8C' } : {}),
    ...(props.isDisabled ? { color: '#8F95B2' } : {}),
  }),
  input: (css, props) => ({
    ...css,
    padding: 0,
    margin: 0,
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#474D66',
    ...(props.isDisabled ? { color: '#8F95B2' } : {}),
  }),
  option: (css, props) => {
    return {
      ...css,
      padding: '0 12px',
      minHeight: '32px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      color: '#474D66',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '16px',
      position: 'relative',
      ...(props.isFocused
        ? { backgroundColor: '#E6E8F0' }
        : {
            backgroundColor: '#ffffff',
            ':hover': { backgroundColor: '#E6E8F0' },
          }),
      ...(props.isSelected
        ? {
            backgroundColor: '#EBF0FF !important',
            ':hover': { backgroundColor: '#EBF0FF' },
            '::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '-1px',
              height: '100%',
              borderRadius: '0px 2px 2px 0px',
              backgroundColor: '#3366FF',
              width: '2px',
            },
          }
        : {}),
    };
  },
  indicatorsContainer: (css, props) => ({
    ...css,
    padding: '0px',
    paddingLeft: '12px',
    paddingTop: '2px',
    columnGap: '8px',
    alignSelf: 'flex-start',
    svg: {
      color: '#8F95B2',
    },
    ...(props.isDisabled
      ? {
          svg: {
            color: '#8F95B2',
          },
        }
      : {}),
  }),
  indicatorSeparator: (css) => ({ ...css, display: 'none' }),
  clearIndicator: (css, props) => ({
    ...css,
    padding: 0,
    svg: {
      color: '##8F95B2',
    },
    '&:hover': {
      svg: {
        color: '#696F8C',
      },
    },
  }),
  dropdownIndicator: (css, props) => ({
    ...css,
    padding: 0,
    svg: {
      color: '##8F95B2',
    },
    ...(props.isDisabled ? { color: '##8F95B2' } : {}),
  }),
});

// FIXME: Tag의 옵션의 value타입이 string이라 일단 util을 통해 value를 변경함....
// T의 타입이 다양할텐데 다양한 타입의 값이 들어와도 모두 문자로 만든다음 비교합니다
// 이 처리를 util로 빼놓으면 비지니스로직은 변경하지않고, util만 변경하면됩니다. 이것이바로 추상화 벽?ㅋ
export const optionValueToTagValue = (optionValue: unknown) => {
  return `${optionValue}`;
};
