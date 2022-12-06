import React, { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftSlot?: React.ReactElement;
  rightSlot?: React.ReactElement;
  errorText?: string;
  label?: string;
  description?: string;
  required?: boolean;
  fullWidth?: boolean;
};
