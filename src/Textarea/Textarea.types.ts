import React, { TextareaHTMLAttributes } from 'react';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorText?: string;
  label?: string;
  description?: string;
  required?: boolean;
};
