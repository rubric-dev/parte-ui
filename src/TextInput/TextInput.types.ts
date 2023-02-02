import React, { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  errorText?: string;
  label?: string;
  description?: string;
  required?: boolean;
  fullWidth?: boolean;
};
