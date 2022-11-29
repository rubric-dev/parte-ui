import {
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  useMemo,
  useState,
  ChangeEvent,
} from 'react';
import * as Styled from './TagInput.styled';
import { Box } from '../Layout';
import { v4 as uuidv4 } from 'uuid';
import { TagInputProps } from './TagInput.types';
import Tag from './Tag/Tag';

const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      addOnBlur,
      onAdd,
      onBlur: customOnblur,
      onInputChange,
      onRemove,
      values,
      ...props
    }: TagInputProps,
    ref
  ) => {
    const id = useMemo(() => uuidv4(), []);
    const {
      label,
      description,
      required = false,
      rightSlot,
      errorText,
      disabled,
      onFocus,
    } = props;

    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);

    const [inputValue, setInputValue] = useState<string>('');

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!inputValue && e.key === 'Backspace') {
        const temp = values.filter((tag) => tag.status !== 'disabled');
        onRemove(temp[temp.length - 1].value);
      }

      if (e.key !== 'Enter') {
        return;
      }

      if (!inputValue) {
        console.log('값을 입력해 주세요');
        return;
      }

      if (e.nativeEvent.isComposing) {
        return;
      }

      onAdd(inputValue);
      setInputValue('');
    };

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (addOnBlur && inputValue) {
        onAdd(inputValue);
        setInputValue('');
      }
      setFocused(false);
      customOnblur?.(e);
    };

    return (
      <Styled.Container>
        {label && (
          <Styled.LabelWrapper>
            {required && <Styled.Required>*</Styled.Required>}
            <Styled.Label
              htmlFor={id}
              title={required ? 'This field is required' : ''}
            >
              {label}
            </Styled.Label>
          </Styled.LabelWrapper>
        )}
        {description && <Styled.Description>{description}</Styled.Description>}
        <Styled.InputWrapper
          hover={hover}
          focused={focused}
          disabled={disabled}
          error={!!errorText}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Box
            style={{ flex: 1 }}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={12}
            paddingRight={12}
            gap={8}
            $wrap
          >
            {!!values.length && (
              <>
                {values.map((tag) => (
                  <Tag
                    key={tag.value.toString()}
                    tag={disabled ? { ...tag, status: 'disabled' } : tag}
                    onRemove={() => {
                      if (tag.status === 'disabled') {
                        return;
                      }
                      onRemove(tag.value);
                    }}
                  />
                ))}
              </>
            )}
            <Styled.Input
              ref={ref}
              id={id}
              {...props}
              onFocus={(e) => {
                onFocus?.(e);
                setFocused(true);
              }}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
                onInputChange?.();
              }}
            />
          </Box>
          {rightSlot && (
            <Styled.RightIconContainer disabled={!!props.disabled}>
              {rightSlot}
            </Styled.RightIconContainer>
          )}
        </Styled.InputWrapper>
        {errorText && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
      </Styled.Container>
    );
  }
);

export default TagInput;
