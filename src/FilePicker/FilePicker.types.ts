import { ChangeEvent, HTMLAttributes } from 'react';

export type FilePickerProps = HTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder?: string;
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  required?: boolean;
  errorMessage?: string;
  label?: string;
  description?: string;
  onChange?: (files: File[]) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputText?: (files: File[]) => string;
  buttonText?: (files: File[]) => string;

  // FIXME: 창희님 테스트를 위해 잠시 설정해놓는 props
  occurError?: boolean;
};
