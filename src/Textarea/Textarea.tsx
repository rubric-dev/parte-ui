import { forwardRef, useMemo, useState } from 'react';
import * as Styled from './Textarea.styled';
import { TextAreaProps } from './Textarea.types';
import { v4 as uuidv4 } from 'uuid';

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const id = useMemo(() => uuidv4(), []);
    const { label, description, required = false, errorText } = props;

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
        <Styled.Textarea id={id} {...props} ref={ref} />
        {errorText && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
      </Styled.Container>
    );
  }
);

export default Textarea;
